import { useEffect, useMemo, useState } from 'react';
import { Project, Task } from '../../models/interfaces/dashboard';
import { TaskOrderBy } from '../../models/types/common';
import { OnChange } from '../../models/types/events';

const useSearch = (data: Project[] & Task[]) => {
  const [filteredData, setFilteredData] = useState<Project[] & Task[]>(useMemo(() => data, [data]));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [order, setOrder] = useState<TaskOrderBy>('latestUpdate');

  const handleOnChange = ({ target: { value } }: OnChange) =>
    setSearchTerm(value);

  const handleSearch = () =>
    setFilteredData(data.filter((project: Project & Task) =>
      project.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));


  const handleOrder = (orderBy: TaskOrderBy): Task[] =>
    orderBy === 'latestUpdate'
      ? filteredData.sort((a, b) => b.latestUpdate - a.latestUpdate)
      : filteredData.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
      });

  const handleOrderChange = (orderBy: TaskOrderBy): void =>
    setOrder(orderBy);

  useMemo(() => handleOrder(order), [order]);

  useEffect(() => data && handleSearch(), [searchTerm, data]);

  return {
    order,
    filteredData,
    handleOnChange,
    handleOrderChange,
  };
}

export default useSearch;