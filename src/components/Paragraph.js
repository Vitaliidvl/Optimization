import React, { useMemo } from 'react';
import Hoc from './Hoc';
import classes from './Paragraph.module.css';

const Paragraph = ({ items, title }) => {
  const sortedList = useMemo(() => {
    console.log('items sorted');
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log('Paragraph');
  return (
    <Hoc>
      <div className={classes.list}>
        <h2>{title}</h2>
        <ul>
          {sortedList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Hoc>
  );
};

export default React.memo(Paragraph);
