import React from 'react'
import './Styles.css'

const TodoFilter = ({ filterscreen, setFilterscreen }) => {
  return (
    <div className='filter-menu'>
      <div><p>My Todos</p></div>
      <div className='filter-option-selector'> 
      <p>Status Filter</p>
      <select className="filter-option" onChange={(e) => setFilterscreen(e.target.value)} name="" id="">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      </div>
    </div>
  )
}

export default TodoFilter