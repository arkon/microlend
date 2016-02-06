import React from 'react';
import classnames from 'classnames';

export const Grid = {
  return (
    <div className={this.props.className}>
      {this.props.children}
    </div>
  );
};

export const Row = {
  const rowClass = classnames('grid__row', {
    // Vertical alignment
    [`grid__row--${this.props.align}`]: typeof this.props.align !== 'undefined',

    // Reverse contents
    'grid__row--reverse': this.props.reverse,

    [this.props.className]: typeof this.props.className !== 'undefined'
  });

  return (
    <div className={rowClass}>
      {this.props.children}
    </div>
  );
};

export const Col = {
  // Specific width, or automatic width column
  const colClass = classnames(this.props.width ? `grid__col--${this.props.width}` : 'grid__col', {
    // Left offset
    [`grid__col--offset--${this.props.offset}`]: typeof this.props.offset !== 'undefined',

    [this.props.className]: typeof this.props.className !== 'undefined'
  });

  return (
    <div className={colClass}>
      {this.props.children}
    </div>
  );
};
