import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'mfra',
          name: 'Frankenstein'
        },
        {
          id: 'mdra',
          name: 'Dracula'
        },
        {
          id: 'mzom',
          name: 'Zombie'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monsters => (
            <h1 key={monsters.id}> {monsters.name} </h1>
          ))
        }
      </div>
    )
  }
}

export default App;
