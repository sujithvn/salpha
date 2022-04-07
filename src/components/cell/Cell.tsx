import React from 'react';
import "./cell.css";

const Cell = ({val}:{val: number}) => {
  let classNameStr = 'cellBox';
  if (val === 1) {
    classNameStr += ' cellAlive';
  } else {
    classNameStr += ' cellDead';
  }
  return (
    <div className={classNameStr}></div>
  )
}

export default Cell