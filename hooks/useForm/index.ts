import { useState } from 'react';
import { Project } from '../../models/interfaces/dashboard';
import { OnChange } from '../../models/types/events';

const useForm = (initialState: Project) => {
  const [data, setData] = useState<Project>(initialState);

  const handleOnChange = ({ target }: OnChange) =>
    setData({ ...data, [target.name]: target.value });

  return { data, handleOnChange };
}

export default useForm;