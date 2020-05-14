import React from 'react'

function TaskBar (props) {
  return (
    <div className='taskBar'>
      <div className='previousButton' onClick={() => props.changeIndex('previous')}>Previous</div>
      <div className='editButtons'>
        <div className='edit'>Edit</div>
        <div className='delete' onClick={() => props.delete()}>Delete</div>
        <div className='new' onClick={() => props.newPersonMode()}>New</div>
      </div>
      <div className='nextButton' onClick={() => props.changeIndex('next')}>Next</div>
    </div>
  )
} 

export default TaskBar