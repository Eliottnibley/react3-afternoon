import React, { Component } from 'react';
import './App.css';
import Data from './data'
import InfoWindow from './components/InfoWindow'
import TaskBar from './components/TaskBar'

class App extends Component{
  constructor() {
    super() 
    this.state = {
      people: Data,
      index: 0
    }

    this.changeIndex = this.changeIndex.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
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
    let cutPerson = newPersonArray.splice(this.state.index, 1)
    if (this.state.index + 1 === this.state.people.length){
      this.setState({index: this.state.index - 1})
    }
    this.setState({people: newPersonArray})
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Home</h1>
        </header>
        <div className='background'>
          <InfoWindow peopleIndex={this.state.index} peopleLength={this.state.people.length} person={this.state.people[this.state.index]}/>
          <TaskBar delete={this.deletePerson} changeIndex = {this.changeIndex}/>
        </div>
      </div>
    )
  }
}

export default App;
