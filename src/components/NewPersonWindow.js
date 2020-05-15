import React from 'react'

function NewPersonWindow(props) {
  let newInput = []
  return (
    <div className='newPersonWind'>
      <span className='firstName'>First Name: 
        <input className='firstNameInput' onChange={(e) => newInput[0] = e.target.value}/>
      </span>
      <span className='LastName' >Last Name: 
        <input className='LastNameInput' onChange={(e) => newInput[1] = e.target.value}/>
      </span>
      <span className='city'>City: 
        <input className='cityInput' onChange={(e) => newInput[2] = e.target.value}/>
      </span>
      <span className='country'>Country: 
        <input className='countryInput' onChange={(e) => newInput[3] = e.target.value}/>
      </span>
      <span className='employer'>Employer: 
        <input className='employerInput' onChange={(e) => newInput[4] = e.target.value}/>
      </span>
      <span className='title'>Title: 
        <input className='titleInput' onChange={(e) => newInput[5] = e.target.value}/>
      </span>
      <span className='movies'>Three Favorite Movies: 
        <input className='moviesInput1' onChange={(e) => newInput[6] = e.target.value}/>, 
        <input className='moviesInput2' onChange={(e) => newInput[7] = e.target.value}/>, 
        <input className='moviesInput3' onChange={(e) => newInput[8] = e.target.value}/>
      </span>
      <span><div className='submitButton' onClick={() => props.newInputHandler(newInput)}>Submit</div><div className='newBackButton' onClick={() => props.newPersonMode()}>Go Back</div></span>
    </div>
  )
} 

export default NewPersonWindow