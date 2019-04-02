import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';
import ShoppingItem from './shopping-item.js';


class ShoppingPlanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{destination: "Wegmans", day:"Monday"}],
      form: {
        destination: "",
        day: "Monday"
      }
    };

  }

  handleDay(event) {
    this.setState({form:{day: event.target.value}});
  }

  handleDestination(event) {
    this.setState({form:{destination: event.target.value}});
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <ShoppingItem destination={item.destination} day={item.day}/>
      );
    });
    return (
      <div class="ShoppingPlanner">
        <div class="ShoppingPlanner-form">
          <span>Add item to Shopping</span>
          <div class="ShoppingPlanner-form-inputs">
            <Input onChange={this.handleDestination.bind(this)} placeholder="Destination" value={this.state.form.destination}></Input>
            <span>On</span>
            <select onChange={this.handleDay.bind(this)} value={this.state.form.day}>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          <Button>Add shopping trip</Button>
        </div>
        <div class="ShoppingPlanner-list">
          {items}
        </div>
      </div>
    );
  }
}

export default ShoppingPlanner;