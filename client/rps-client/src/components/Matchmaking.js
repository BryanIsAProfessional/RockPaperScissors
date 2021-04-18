import React, { Component } from 'react'

class Matchmaking extends Component {

    constructor(props) {
        super(props);
        this.startMatchmaking = this.startMatchmaking.bind(this);
        this.setSocket = this.props.setSocket.bind(this);
    }

    startMatchmaking(){
        console.log("Starting matchmaking");
        this.setSocket(new WebSocket("ws://localhost:8000"));
    }

    render(){
        return(
            <div>
                <button onClick={this.startMatchmaking}>Find a match</button>
            </div>
        );
    }
    
}

export default Matchmaking