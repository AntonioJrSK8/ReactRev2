import React, { Component } from 'react';
import Painel from '../painel/painel';

class compProps extends Component {

    constructor(props) {
        super(props);
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
                <Painel headercolor="red" headertext="Identificação" data="school of home"/>
          </div>;
    }
}
 
export default compProps;