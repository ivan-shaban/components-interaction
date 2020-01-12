import React, { Component } from 'react';
import './App.css';
import { ButtonComponent } from "./components/ButtonComponent/ButtonComponent";
import { ColoredComponent } from "./components/ColoredComponent/ColoredComponent";
import { GREEN, RED } from "./constants/colors";

class App extends Component {
    state = {
        color: RED,
    };
    
    handleClick = () => {
        this.setState({
            color: this.state.color === RED ? GREEN : RED
        });
    };
    
    render() {
        return (
            <div className="App">
                <ColoredComponent color={this.state.color}/>
                <ButtonComponent onClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;
