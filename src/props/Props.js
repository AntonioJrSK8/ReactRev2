import React, { Component } from 'react';

class compProps extends Component {

    constructor(props) {
        super(props);
        
        //const { attr, attr2 } = this.props;

        //this.props = {
        //    attr : 'Value',
        //    attr2: 'Value 2'
        //};

        this.state = {  }
    }

    render() { 
        
        const { attr, attr2 } = this.props;
        
        return <div>
                <p>
                    Informação do props: <br />
                    Atributo 1: {attr==='p' ? 'Letra p' : attr } <br />
                    Atributo 2: {attr2}
                </p>
          </div>;
    }
}
 
export default compProps;