import React, { Component } from 'react';


class compState extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Pedro', age: 21 }
    }
    render() { 
        const {name, age } = this.state;
        return ( <div>
            <ul>
                <li>Nome: {name}</li>
                <li>idade: { age }</li>
            </ul>
        </div> );
    }
}
 
export default compState;