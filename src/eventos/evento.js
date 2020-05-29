import React, { Component } from 'react';

class BtnEvento extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicked : 0
         }

         // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
         //this.clickMethod = this.clickMethod.bind(this);
    }

    clickMethod = () => {
        this.setState({ 
            clicked: this.state.clicked + 1 
        });
        console.log('clicked');

    }

    render() { 
        return ( <button onClick={this.clickMethod} type="button" >click me!</button> );
    }
}
 
export default BtnEvento;