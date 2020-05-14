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
  }

  changeIndex(val) {
    console.log(this.state.index)
    if (this.state.index !== 0 && val ==='previous') {
      this.setState({index: this.state.index - 1})
    }
    if (this.state.index !== this.state.people.length - 1 && val ==='next') {
      this.setState({index: this.state.index + 1})
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Home</h1>
        </header>
        <div className='background'>
          <InfoWindow peopleLength={this.state.people.length} person={this.state.people[this.state.index]}/>
          <TaskBar changeIndex = {this.changeIndex}/>
        </div>
      </div>
    )
  }
}

export default App;
