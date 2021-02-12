import React, { Component } from "react";
import { NavigationBar } from "./components/Nvb";
import { Foot } from "./components/Footer";
import { Home } from "./Home";
import { Selling } from "./Selling";
import { Repair } from "./Repair";
import { News } from "./News";
import { Shop } from "./Shop";
import { About } from "./About";
import { Contact } from "./Contact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import {
  newsarticle1,
  newsarticle2,
  newsarticle3,
  newsarticle4,
  newsarticle5,
  newsarticle6,
  newsarticle7,
  newsarticle8,
  newsarticle9,
  newsarticle10,
  newsarticle11,
  newsarticle12,
  newsarticle13,
  newsarticle14,
  newsarticle15,
  newsarticle16,
  newsarticle17,
  newsarticle18,
  newsarticle19,
  newsarticle20,
  newsarticle21,
  newsarticle22,
  newsMain
} from "./components/news_articles/newsarticles"

class App extends Component {
  render() {
    const history = createBrowserHistory({ basename: '/projects/reactjs/mobilus/' });

    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch basename="/projects/reactjs/mobilus/">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/selling" component={Selling}></Route>
            <Route exact path="/repair" component={Repair}></Route>
            <Route exact path="/news" component={News}></Route>
            <Route path="/news/article1" component={newsarticle1}></Route>
            <Route path="/news/article2" component={newsarticle2}></Route>
                                    <Route path="/news/article3" component={newsarticle3}></Route>

                                    <Route path="/news/article4" component={newsarticle4}></Route>
                                    <Route path="/news/article5" component={newsarticle5}></Route>
                                    <Route path="/news/article6" component={newsarticle6}></Route>

                                    <Route path="/news/article7" component={newsarticle7}></Route>
                                    <Route path="/news/article8" component={newsarticle8}></Route>
                                    <Route path="/news/article9" component={newsarticle9}></Route>

                                    <Route path="/news/article10" component={newsarticle10}></Route>
                                    <Route path="/news/article11" component={newsarticle11}></Route>
                                    <Route path="/news/article12" component={newsarticle12}></Route>

                                    <Route path="/news/article13" component={newsarticle13}></Route>
                                    <Route path="/news/article14" component={newsarticle14}></Route>
                                    <Route path="/news/article15" component={newsarticle15}></Route>

                                    <Route path="/news/article16" component={newsarticle16}></Route>
                                    <Route path="/news/article17" component={newsarticle17}></Route>
                                    <Route path="/news/article18" component={newsarticle18}></Route>

                                    <Route path="/news/article19" component={newsarticle19}></Route>
                                    <Route path="/news/article20" component={newsarticle20}></Route>
                                    <Route path="/news/article21" component={newsarticle21}></Route>

                                    <Route path="/news/article22" component={newsarticle22}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </Router>
        <Foot />
      </React.Fragment>
    );
  }
}

export default App;
