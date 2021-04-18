import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';

function GameControls(socket) {

    function setSelection(selection){

    }

    return(
        <div>
          <button onClick={() => setSelection("Rock")}><img src={rock} height={96} width={96}/></button>
          <button onClick={() => setSelection("Paper")}><img src={paper} height={96} width={96}/></button>
          <button onClick={() => setSelection("Scissors")}><img src={scissors} height={96} width={96}/></button>
        </div>
    )
}

export default GameControls;