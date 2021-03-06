import React, { Component } from 'react';

class Ciclolife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
  }

  componentDidMount() {

    this.time = setInterval(() => {
                    this.setClock();
                }, 1000);
  }


  componentWillUnmount() {

      clearInterval(this.time);
  }

  setClock(){
      this.setState({
          time: new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true
            })
        });
  }
  
  render() {
    const { time } = this.state;

    return (
      <h1>
        {time}
      </h1>
    );
  }
}
 
export default Ciclolife;