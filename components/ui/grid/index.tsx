import React from 'react';
import s from './grid.module.scss';
import cn from 'classnames';

type Col = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Direction = 'row' | 'column';

interface Props {
  children: JSX.Element | JSX.Element[];
  parent?: boolean;
  child?: boolean;
  xs?: Col;
  sm?: Col;
  md?: Col;
  lg?: Col;
  xl?: Col;
  direction_xs?: Direction;
  direction_sm?: Direction;
  direction_md?: Direction;
  direction_lg?: Direction;
  direction_xl?: Direction;
  no_spacing?: boolean;
}

const Grid: React.FC<Props> = ({
  children,
  parent,
  child,
  xs,
  sm,
  md,
  lg,
  xl,
  direction_xs,
  direction_sm,
  direction_md,
  direction_lg,
  direction_xl,
  no_spacing,
}): JSX.Element => {
  const classNames = cn({
    [s.grid_parent]: parent,
    [s.grid_child]: child,
    [s[`grid_xs_${xs}`]]: xs,
    [s[`grid_sm_${sm}`]]: sm,
    [s[`grid_md_${md}`]]: md,
    [s[`grid_lg_${lg}`]]: lg,
    [s[`grid_xl_${xl}`]]: xl,
    [s[`grid_direction_xs_${direction_xs}`]]: direction_xs,
    [s[`grid_direction_sm_${direction_sm}`]]: direction_sm,
    [s[`grid_direction_md_${direction_md}`]]: direction_md,
    [s[`grid_direction_lg_${direction_lg}`]]: direction_lg,
    [s[`grid_direction_xl_${direction_xl}`]]: direction_xl,
    [s.grid_no_spacing]: no_spacing,
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Grid;