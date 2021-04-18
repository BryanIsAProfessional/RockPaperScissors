import React, { Component } from 'react'
import GameView from './GameView.js'
import GameControls from './GameControls.js'
import Chat from './Chat.js'

class Game extends Component {

    constructor(props) {
        super(props);
        this.socket = this.props.socket;

        if(this.socket instanceof WebSocket){
            this.socket.addEventListener("open", function(event){
                console.log("Connected to WS Server");
            })
        }else{
            console.log("Not passed a websocket");
        }
    }
    
    render(){
        return(
            <div>
                {/* <GameView socket={this.socket}/>
                <GameControls socket={this.socket}/>
                <Chat socket={this.socket}/> */}
            </div>
        )
    }
}

export default Game;