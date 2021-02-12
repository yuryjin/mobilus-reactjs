import React, { Component } from 'react';

export class thumbnail1 extends Component {
    render() {
        return (
            <div>
                <div className="article-wrapper-outer-news">
                      <a href="/news/article5">
                      <div className="card">
                        <img src={require("./media/repair_jumbotron.jpg")} alt="" style={{ height: "30rem", width: "100%"}} />
                        <div className="text-table-wrapper">
                          <h4 className="article-title-styling">New releases of 2020</h4>
                          <span className="article-title-span-slyling">2 October, 2020</span>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default thumbnails;