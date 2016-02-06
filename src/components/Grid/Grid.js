import React from 'react';
import classnames from 'classnames';

export const Row = (props) => {
  const rowClass = classnames('grid__row', {
    // Vertical alignment
    [`grid__row--${props.align}`]: typeof props.align !== 'undefined',

    // Reverse contents
    'grid__row--reverse': props.reverse,

    [props.className]: typeof props.className !== 'undefined'
  });

  return (
    <div className={rowClass}>
      {props.children}
    </div>
  );
};

export const Col = (props) => {
  // Specific width, or automatic width column
  const colClass = classnames(props.width ? `grid__col--${props.width}` : 'grid__col', {
    // Left offset
    [`grid__col--offset--${props.offset}`]: typeof props.offset !== 'undefined',

    [props.className]: typeof props.className !== 'undefined'
  });

  return (
    <div className={colClass}>
      {props.children}
    </div>
  );
};
