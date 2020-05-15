import React, { Component } from 'react';
import './App.css';
import Data from './data'
import InfoWindow from './components/InfoWindow'
import TaskBar from './components/TaskBar'
import NewPersonWindow from './components/NewPersonWindow'

class App extends Component{
  constructor() {
    super() 
    this.state = {
      people: Data,
      index: 0,
      newMode: false,
      editMode: false,
      idCounter: 26
    }

    this.changeIndex = this.changeIndex.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
    this.newPersonMode = this.newPersonMode.bind(this)
    this.newInputHandler = this.newInputHandler.bind(this)
  }

  changeIndex(val) {
    if (this.state.index !== 0 && val ==='previous') {
      this.setState({index: this.state.index - 1})
    }
    if (this.state.index !== this.state.people.length - 1 && val ==='next') {
      this.setState({index: this.state.index + 1})
    }
  }

  deletePerson() {
    let newPersonArray = this.state.people.slice()
    newPersonArray.splice(this.state.index, 1)
    if (this.state.index + 1 === this.state.people.length){
      this.setState({index: this.state.index - 1})
    }
    this.setState({people: newPersonArray})
  }

  newPersonMode() {
    if(this.state.newMode){
      this.setState({newMode: false})
    }
    else {
      this.setState({newMode: true})
    }
  }

  newInputHandler (input) {
    if (input.length !== 9){
      window.alert('Please fill in all feilds')
    }
    else {
      let newPerson = {
        id: this.state.idCounter,
        name: {first: input[0], last: input[1]},
        city: input[2],
        country: input[3],
        employer: input[4],
        title: input[5],
        favoriteMovies: [input[6], input[7], input[8]]
      }
      let newpeopleArray = this.state.people.slice()
      newpeopleArray.unshift(newPerson)
      this.setState({people: newpeopleArray})
      this.setState({index: 0})
      this.setState({newMode: false})
    }
  }

  render() {
    if(this.state.newMode){
      return (
        <div className='App'>
          <header>
            <h1>Home</h1>
          </header>
          <div className='background'>
            <NewPersonWindow newInputHandler={this.newInputHandler}  newPersonMode={this.newPersonMode}/>
          </div>
        </div>
      )
    }
    else if (this.state.editMode){

    }
    else {
      return (
        <div className='App'>
          <header>
            <h1>Home</h1>
          </header>
          <div className='background'>
            <InfoWindow peopleIndex={this.state.index} peopleLength={this.state.people.length} person={this.state.people[this.state.index]}/>
            <TaskBar newPersonMode={this.newPersonMode} delete={this.deletePerson} changeIndex = {this.changeIndex}/>
          </div>
        </div>
      )
    }
  }
}

export default App;
