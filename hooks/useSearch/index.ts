import { useEffect, useMemo, useState } from 'react';
import { Project, Task } from '../../models/interfaces/dashboard';
import { OnChange } from '../../models/types/events';

const useSearch = <T>(data: T[]) => {
  const [filteredData, setFilteredData] = useState<T[]>(useMemo(() => data, [data]));
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOnChange = ({ target: { value } }: OnChange) =>
    setSearchTerm(value);

  const handleSearch = () =>
    setFilteredData(data.filter((project: Project & Task) =>
      project.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));

  useEffect(() => data && handleSearch(), [searchTerm, data]);

  return { filteredData, handleOnChange };
}

export default useSearch;