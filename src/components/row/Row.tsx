import React from 'react'
import Cell from '../cell/Cell'
import './row.css'

const Row = ({rowData}: {rowData: number[]}) => {
  return (
    <div className='row'>
      {rowData.map((cellVal, ix) => {
        return <Cell key={ix} val={cellVal}/>
      })
      }
    </div>
  )
}

export default Row