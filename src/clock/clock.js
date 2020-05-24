import React, { Component } from 'react';
import "../App.css";

class clock extends Component {
    state = {  }
    render() { 
        
        const clock = () => {
            return new Date().toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true
            });
        }

        const Cor = "Cor";

        return ( 
            <h4 className={ Cor } >
                {
                    clock()
                }
            </h4> 
        );
    }
}
 
export default clock;