import React from 'react'

function NewPersonWindow(props) {
  return (
    <div className='newPersonWind'>
      <div className='newBackButton' onClick={() => props.newPersonMode()}>Go Back</div>
    </div>
  )
} 

export default NewPersonWindow