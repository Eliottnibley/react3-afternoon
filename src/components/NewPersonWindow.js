import React from 'react'

function NewPersonWindow(props) {
  let newInput = []
  return (
    <div className='newPersonWind'>
      <span className='firstName'>First Name: 
        <input className='firstNameInput' onChange={(e) => newInput[0] = e.target.value}/>
      </span>
      <span className='LastName'>Last Name: 
        <input className='LastNameInput'/>
      </span>
      <span className='city'>City: 
        <input className='cityInput'/>
      </span>
      <span className='country'>Country: 
        <input className='countryInput'/>
      </span>
      <span className='employer'>Employer: 
        <input className='employerInput'/>
      </span>
      <span className='title'>Title: 
        <input className='titleInput'/>
      </span>
      <span className='movies'>Three Favorite Movies: 
        <input className='moviesInput1'/>, 
        <input className='moviesInput2'/>, 
        <input className='moviesInput3'/>
      </span>
      <div className='newBackButton' onClick={() => props.newPersonMode()}>Go Back</div>
    </div>
  )
} 

export default NewPersonWindow