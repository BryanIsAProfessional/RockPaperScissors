function GameView(socket) {

    const selection = null;

    return(
        <div>
          {selection ?
            <p>Your selection is {selection}</p>:
            <p>Make a selection</p>
          }
        </div>
    )
}

export default GameView