import React, { Component } from 'react';

class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { headercolor, headertext, data } = this.props;
        return <div className="painel">
                    <div className="painel-head" style={{ width: '100%', background: headercolor }}>
                      {headertext}
                    </div>
                    <div className="painel-text">
                      {data}
                    </div>
                </div>;
    }
}
 
export default Painel;