import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Project } from '../../models/interfaces/dashboard';
import { RootState } from '../../models/interfaces/general';

const useSelectProject = (project: Project) => {
  const dispatch = useDispatch();
  const { selectedProject } = useSelector((state: RootState) => state.dashboard);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedProject) return;
    if (selectedProject.id === project.id) return setActive(true);
    setActive(false);
  }, [selectedProject]);

  return { active, dispatch };
}

export default useSelectProject;