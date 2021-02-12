import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Articles_main } from "./repair_articles/Articles_main";
import { Repair_article1 } from "./repair_articles/Repair_article1";
import { Repair_article2 } from "./repair_articles/Repair_article2";
import { Repair_article3 } from "./repair_articles/Repair_article3";
import { Repair_article4 } from "./repair_articles/Repair_article4";
import { Repair_article5 } from "./repair_articles/Repair_article5";
import { Repair_article6 } from "./repair_articles/Repair_article6";
import "./Repair.css";

export class Repair extends Component {
  render() {
    return (
      <div className="repair-whole">
        <div className="jumbotron jumbotron-fluid jumbotron-repair">
        </div>
        <div className="container">
          <div className="articles-wrapper-outer">
            <div className="articles-wrapper-inner">
              <Router>
                <Switch>
                  <Route exact path="/repair"           component={Articles_main}></Route>
                  <Route path="/repair/article1"  component={Repair_article1}></Route>
                  <Route path="/repair/article2"  component={Repair_article2}></Route>
                  <Route path="/repair/article3"  component={Repair_article3}></Route>
                  <Route path="/repair/article4"  component={Repair_article4}></Route>
                  <Route path="/repair/article5"  component={Repair_article5}></Route>
                  <Route path="/repair/article6"  component={Repair_article6}></Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
