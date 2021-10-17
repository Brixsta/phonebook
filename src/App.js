import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component {


    state = {
      people: [
        {name: "baron", number: '502-321-2231'},
        {name: "boris", number: '832-991-1001'},
        {name: "shawn", number: '442-421-0201'},
        {name: "sidney", number: '778-324-6656'},
        {name: "susan", number: '818-431-4422'},
        {name: "tina", number: '941-923-3291'},
        {name: "truman", number: '941-923-3291'},
      ],
      filtered: null
    }

  render () {
    const filteredPeople = this.state.filtered;
    const people = this.state.people;
    const handleChange = (value)=> {
      filterList(value.toLowerCase());
    }

    const filterList = (value)=> {
      let current = this.state.people;
      let result = current.filter((item) => {
        return item.name.slice(0,value.length).match(value)
        });
      this.setState({filtered: result});
    }

    return (
      <div className="wrapper">
        <div className={"container"}>
          <h1 className={"phone-book-title"}>Phonebook <span
          className={"phone-book-title-text-effect"}>App</span></h1>
          <form>
            <input 
            placeholder={"filter by name"}
            onChange={(evt)=>{
              handleChange(evt.target.value);
            }}
            className={"text-input"}
            type="text"></input>
          </form>
          {this.state.filtered === null && <List people={people} />}
          {this.state.filtered !== null && <List people={filteredPeople} />}
        </div>
      </div>
    );
  }
}

export default App;
