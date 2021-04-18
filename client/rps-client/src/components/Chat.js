import React from 'react'

function Chat(socket) {

    socket.addEventListener("message", function(event){
        // create a new node for our message
        const messageContainer = document.getElementById("message-container");
        let node = document.createElement("P")
        node.appendChild(document.createTextNode(event.data))
        
        // append our node to messages
        messageContainer.appendChild(node)
    })

    const sendMessage = (event) => {
        event.preventDefault()
        // get our form data
        let user = document.getElementById("user").value
        let message = document.getElementById("message").value
    
        // make sure we have a username and message
        if(user === '' || message === ''){
            return false
        }
    
        // create a new node for our message
        const messageContainer = document.getElementById("message-container");
        let node = document.createElement("P")
        node.appendChild(document.createTextNode(user + ": " + message))
    
        // send the data to the server
        socket.send(user + ": " + message)
    
        // append our node to messages
        messageContainer.appendChild(node)
    
        // reset our form data
        document.getElementById("message").value = ""
    
        // return false so the page doesn't reload
        return false
      }

    return(
        <div>
            <form onSubmit={sendMessage}>
                <label>Username</label>
                <input type="text" id="user"/><br/>
                <label>Message</label>
                <input type="text" id="message"/><br/>
                <input type="submit" value="Send Message"/>
            </form>
            <div id="message-container">
                <h2>Messages</h2>
            </div>
        </div>
    )
}

export default Chat;