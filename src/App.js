import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 29 },
      { name: 'stephanie', age: 20 }
    ]
  }
  switchNameHander = (newName) => {
    //console.log('Was click');
    //Dont do this: this.state.persons[0].name = 'max';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'manu', age: 29 },
        { name: 'stephanie', age: 27 }
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
        {
          this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}></Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHander.bind(this, 'max')}
              changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}></Person>
          </div> : null
        }
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }

}

export default App;