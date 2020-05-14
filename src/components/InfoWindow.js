import React from 'react'

function InfoWindow(props) {
  let person = props.person
  let length = props.peopleLength
  return(
    <div className='infoWindow'>
      <h2 className='personName'>{person.name.first} {person.name.last}</h2>
      <h2 className='counter'>{props.peopleIndex + 1}/{length}</h2>
      <div className='personalInfo'>
        <p><span>From: </span>{person.city}, {person.country}</p>
        <p><span>Job Title: </span>{person.title}</p>
        <p><span>Employer: </span>{person.employer}</p>
      </div>
      <div className='movieInfo'>
        <span>Favorite Movies:</span>
        <p>1. {person.favoriteMovies[0]}</p>
        <p>2. {person.favoriteMovies[1]}</p>
        <p>3. {person.favoriteMovies[2]}</p>
      </div>
    </div>
  )
}

export default InfoWindow