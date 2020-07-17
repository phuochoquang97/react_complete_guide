import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'max', age: 28},
      {name: 'manu', age: 29},
      {name: 'stephanie', age: 20}
    ]
  }
  switchNameHander = () => {
    //console.log('Was click');
    //Dont do this: this.state.persons[0].name = 'max';
    this.setState({
      persons: [
        {name: 'maximum', age: 28},
        {name: 'manu', age: 29},
        {name: 'stephanie', age: 27}
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHander}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'} , React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
  
}

export default App;
