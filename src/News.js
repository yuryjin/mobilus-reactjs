import React, {Component} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
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
import "./News.css";

export class News extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="jumbotron jumbotron-news-heroimage"></div>
                </section>
                <section>
                    <div className="text-title text-center">
                        <h1>News</h1>
                    </div>
                </section>
                <section></section>
                <div className="container">
                    <div className="articles-wrapper-outer">
                        <div className="articles-wrapper-inner">
                            <Router>
                                <Switch basename="/projects/reactjs/mobilus/">
                                    <Route exact path="/news" component={newsMain}></Route>
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
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

/*

                  <Route path="/repair/article1"  component={Repair_article1}></Route>
                  <Route path="/repair/article2"  component={Repair_article2}></Route>
                  <Route path="/repair/article3"  component={Repair_article3}></Route>
                  <Route path="/repair/article4"  component={Repair_article4}></Route>
                  <Route path="/repair/article5"  component={Repair_article5}></Route>
                  <Route path="/repair/article6"  component={Repair_article6}></Route>

*/

/*

          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4>Articles</h4>
                    <div className="article-wrapper-outer-news">
                      <a href="/news/article5">
                      <div className="card">

                        <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                        <div className="text-table-wrapper">
                          <h4 className="article-title-styling">New releases of 2020</h4>
                          <span className="article-title-span-slyling">2 October, 2020</span>
                        </div>
                        </div>

                      </a>
                      </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <h2>Financial</h2>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h2>New releases</h2>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h2>Sports</h2>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h2>Sports</h2>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="article-wrapper-outer-news">
                          <a href="/news/article5">
                          <div className="card">
                            <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                            <div className="text-table-wrapper">
                              <h4 className="article-title-styling">New releases of 2020</h4>
                              <span className="article-title-span-slyling">2 October, 2020</span>
                            </div>
                            </div>
                          </a>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="row">
                  <div className="col-12">
                    <h4>Stories</h4>
                    <div className="article-wrapper-outer-news">
                      <div className="card">
                        <h4>Articles</h4>
                        <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ width: "100%"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

*/