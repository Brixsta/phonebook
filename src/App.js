import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component {

  constructor () {
    super();


    this.state = {
      people: [
        {name: "boris", number: '502-321-2231'},
        {name: "baron", number: '111-991-1001'},
        {name: "shawn", number: '442-421-0201'},
        {name: "sidney", number: '778-324-6656'},
        {name: "susan", number: '818-431-4422'},
        {name: "dark", number: '941-923-3291'},
        {name: "dirk", number: '941-923-3291'},
      ],
      filtered: null
    }
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
        let regex = new RegExp(value, 'gi');
        return item.name.match(regex)
        });

      this.setState({filtered: result});

      console.log(this.state)
    }

    return (
      <div className="wrapper">
        <div className={"container"}>
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
