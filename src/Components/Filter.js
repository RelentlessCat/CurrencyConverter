import React from 'react'

function Filter({filter,handleFilterChange}) {
  return (
    <div className='filter'>
      <p>Filter Shown:</p>
    <input value={filter} onChange={handleFilterChange} />
  </div>
  )
}

export default Filter