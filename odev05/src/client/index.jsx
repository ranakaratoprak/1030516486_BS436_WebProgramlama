import React from "react";
import ReactDOM, { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Game } from "./Game";
import { Home } from "./home";

const notFound = () => {
  return (
      <div>
          <h2>Sayfa Bulunamadı: 404</h2>
          <p>
              Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
              Lütfen daha sonra tekrar deneyiniz.
          </p>
      </div>
  )
}

class App extends React.Component {
  render(){
      return(
        <HashRouter>
        <div>
            <Switch>
                <Route exact path='/Game' component={Game}/>
                <Route exact path='/' component={Home}/>
                <Route component={notFound}/>
            </Switch>
        </div>
        </HashRouter>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
