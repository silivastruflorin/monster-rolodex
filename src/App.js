import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],  
    };
  }

 
  componentDidMount(){
    console.log("Component was mounted");

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState({monsters:users},() => console.log(this.state.monsters)));
    
  }

  componentDidUpdate(){
    console.log("State was updated");
  }

  render(){
    // console.log(this.state.monsters)
    console.log("render was called " + new Date().toTimeString());
    return(
      <div>
        {
          this.state.monsters.map(elementInMonsters =>
                                              (
                                                <h1 id={elementInMonsters.id}>{elementInMonsters.name}</h1>
                                              )
                                 ) 
        }
      
      </div>
    );
  }
}
export default App;

/*
    Render method is called 
    then ComponentDidMount is called and updates the state 
    beacause state was changed the render method is called again 
    and after that ComponentDidUpdate is called.

    at the first render monsters array is empty 
    and by using map(i think has try catch inside)
    does not trow error but if we use directly <div>{ this.state.monsters[0]}</div>
    will trow error.
*/