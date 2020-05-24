import React, { Component } from 'react';

class compProps extends Component {

    constructor(props) {
        super(props);
        
        this.props = {
            attr : 'Value',
            attr2: 'Value 2'
        };

        this.state = {  }
    }

    render() { 
        return <p>
            Informação do props: <br />
            Atributo 1: {this.props.attr} <br />
            Atributo 2: {this.props.attr2}
          </p>;
    }
}
 
export default compProps;