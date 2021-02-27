import React from 'react';
import s from './grid.module.scss';
import cn from 'classnames';

type Col = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg' | 'xl';
type Wrap = 'wrap' | 'nowrap';

interface Props {
  children: JSX.Element | JSX.Element[];
  parent?: boolean;
  child?: boolean;
  xs?: Col;
  sm?: Col;
  md?: Col;
  lg?: Col;
  xl?: Col;
  spacing?: Spacing;
  inner_spacing?: Spacing;
  wrap?: Wrap,
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
  spacing,
  wrap,
  inner_spacing,
}): JSX.Element => {
  const classNames = cn({
    [s.grid_parent]: parent,
    [s.grid_child]: child,
    [s[`grid_xs_${xs}`]]: xs,
    [s[`grid_sm_${sm}`]]: sm,
    [s[`grid_md_${md}`]]: md,
    [s[`grid_lg_${lg}`]]: lg,
    [s[`grid_xl_${xl}`]]: xl,
    [s[`grid_spacing_${spacing}`]]: spacing,
    [s[`grid_${wrap}`]]: wrap,
    [s[`grid_inner_spacing_${inner_spacing}`]]: inner_spacing,
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Grid;