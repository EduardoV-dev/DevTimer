import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../models/interfaces/common';
import { Time } from '../../models/interfaces/dashboard';
import { selectTaskAction, timingStateAction } from '../../redux/ducks/dashboard';
import { handleNewTimeOnTask } from '../../utils/dashboard/handlers';

const useTimer = () => {
  const { selectedTask } = useSelector((state: RootState) => state.dashboard);
  const { id, projectId, time } = selectedTask;
  
  const [timeValues, setTimeValues] = useState<Time>(time);
  const [interv, setInterv] = useState<NodeJS.Timeout>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  
  const { secs, mins, hrs } = time;

  let updatedSecs = secs,
    updatedMins = mins,
    updatedHrs = hrs;

  const start = () => {
    setInterv(setInterval(stopwatch, 1000));
    console.log(timeValues);
    dispatch(timingStateAction(true));
  }

  const pause = () => {
    clearInterval(interv);
    setInterv(null);
    dispatch(timingStateAction(false));
    dispatch(selectTaskAction({
      ...selectedTask,
      time: timeValues,
    }));
  }

  const handleOnClick = () => {
    setLoading(true);
    handleNewTimeOnTask(timeValues, id, projectId, dispatch)
      .then(() => dispatch(timingStateAction(null)))
      .finally(() => setLoading(false));
  }

  const stopwatch = () => {
    if (updatedMins >= 59) {
      updatedHrs++;
      updatedMins = -1;
    }
    if (updatedSecs >= 59) {
      updatedMins++;
      updatedSecs = -1;
    }
    updatedSecs++;

    return setTimeValues({
      secs: updatedSecs,
      mins: updatedMins,
      hrs: updatedHrs,
    });
  }

  useEffect(() => {
    setTimeValues(time);

  }, [time]);

  return { timeValues, loading, start, pause, handleOnClick };
}

export default useTimer;