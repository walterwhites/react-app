import React from 'react'
import { Button } from 'mdbreact';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.updateClock(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render(){
        return(
            <p>For information in beatles world the time is { this.state.time }</p>
        )
    }
}

export default Clock;