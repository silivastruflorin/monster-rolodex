import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],  
      searchField : ''
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

  testSearchbox = params => {
    return console.log(params);
  }

  render(){
    // console.log(this.state.monsters)
    const {monsters, searchField} = this.state; //destructurialize the state object , same as const monster = this.state.monsters .. 
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    console.log("render was called " + new Date().toTimeString());
    return(
          <div id="CardList">
            {/* <input type="search" placeholder='seach for monsters' onChange={e => this.testSearchbox(e.target.value)}></input>  done without arrow function */}
            <SearchBox placeholder='search monsters' modifyOnChange={e => this.setState({searchField: e.target.value})} />                                                                                     
            <CardList monsterList={filteredMonster}/>);
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