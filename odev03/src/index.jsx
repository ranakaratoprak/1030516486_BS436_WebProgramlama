import React from "react";
import ReactDOM from "react-dom";

import { newGame, newGame1, newGame2 } from "./game";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {...this.state,
            game:newGame(), 
            game1:newGame1(),
            game2:newGame2()
        };
    }

    render() {
        const game = this.state.game;
        const game1 = this.state.game1;
        const game2 = this.state.game2;
        return(
            <>
            <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamazsan 2. seçim hakkı tanınacaktır.</p>
            <img id="img0" class="kart" src="ilk.png" onclick={()=>this.game.newGame()}/>
            <img id="img1" class="kart" src="ilk.png" onclick={()=>this.game1.newGame1()}/>
            <img id="img2" class="kart" src="ilk.png" onclick={()=>this.game2.newGame2()}/>
            <div class="mesaj">
            <p id="alanId">Kedi kartını bulmak için kartın üzerine tıklamalısın.</p>
            <p id="kazandiId" style="display: none"></p>
            <p id="yenildiId" style="display: none"></p>
            </div>
        </>);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));