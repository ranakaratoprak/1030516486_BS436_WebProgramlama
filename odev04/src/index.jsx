import React from "react";
import ReactDOM, { render } from "react-dom";
import { Game } from "./Game";


class App extends React.Component {
  render(){
      return(<div>
          <Game/>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
