import React, { Component } from 'react';

class OneWay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: []
    };
  }

  handleChange = event => {
    this.setState({
      //desta forma usamos o mesmo tag se uso do state
      [event.target.name]: event.target.value

      //com uso do state buscando valor do tag
      //name : event.target.value
    });

    console.log("state :", this.state);
  };

  insertDate = (event) => {
    this.state.date.push(this.state.name);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          id="name"
          placeholder="Enter with your name"
        />
        <button type="button" onClick={this.insertDate}>
          Ok!
        </button>
      </div>
    );
  }
}
 
export default OneWay;