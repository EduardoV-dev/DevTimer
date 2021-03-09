import { useState } from 'react';
import { OnChange } from '../../models/types/events';

const useForm = <T>(initialState: T) => {
  const [data, setData] = useState<T>(initialState);

  const handleOnChange = ({ target }: OnChange): void =>
    setData({ ...data, [target.name]: target.value });

  const clearInputs = (): void =>
    setData({ ...initialState });

  return { data, handleOnChange, clearInputs, setData };
}

export default useForm;