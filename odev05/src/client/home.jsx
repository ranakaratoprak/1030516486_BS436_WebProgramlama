import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render(){
        return(
            <div>
                <h2>Kart Oyunu</h2>
                <p className="welcome-text">Kart Oyununa hoşgeldiniz. Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk
                tercihte Kedi kartını bulamazsan 2. seçim hakkı tanınacaktır.</p>
                <div className="action">
                    <Link to={"/Game"} className="play">Oyna</Link>
                </div>
            </div>
        );
    }

}