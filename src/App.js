import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('===== inside componentWillMount');
  }
  componentDidMount() {
    console.log('===== inside componentDidMount');
  }
  state = {
    persons: [
      { name: "Manjeet", age: 29 },
      { name: "Muskan", age: 20 },
      { name: "Manoj", age: 34 }
    ],
    otherState: 'some value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    console.log('clicked', newName);
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Muskan", age: 20 },
        { name: "Manoj", age: 34 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 20 },
        { name: "Manoj", age: 34 }
      ]
    })
  }

  render() {
    console.log('===== inside render');
    const style = {
      backgroundColor: 'white',
      border: '2px solid #14141d',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '10px'
    }
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h4>Create your todo list </h4>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Manjeet')} className="square">Switch Name</button>
        <div>
          {this.state.persons.map(person => {
            return <Person
              appTitle={this.props.title}
              name={person.name}
              age={person.age} />
          })}
        </div>
      </div>
    );

    //return React.createElement('div', {className: 'App'}  , React.createElement('h1', null, 'React JS'));
  }
}


export default App;
