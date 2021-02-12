import React, { Component } from "react";
import "./Selling.css";

export class Selling extends Component {
  render() {
    return (
      <>
        <div className="selling-whole">
          <div className="jumbotron jumbotron-selling d-none d-lg-block hero-image-desktop-version-selling">
            <div className="container"></div>
          </div>
          <div className="jumbotron jumbotron-selling d-block d-lg-none hero-image-mobile-version-selling">
            <div className="container"></div>
          </div>
          <div className="container text-center mb-5">
            <div class="row">
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sell with Dealer</h5>
                    <p class="card-text">
                      Sell your car with help of our trusted dealers.
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Start Selling!
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sell it Yourself</h5>
                    <p class="card-text">
                      List your car on Mobilus and buyer will find it in no
                      time!
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Start Selling!
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Find car's value</h5>
                    <p class="card-text">
                      Estimate your car and find it's value.
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Find Out!
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sell through Agent</h5>
                    <p class="card-text">
                      Sell your car through agent from our trusted network.
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Start Selling!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-selling-wrapper">
            <div className="row">
              <div className="col-12 col-lg-3"></div>
              <div className="col-12 col-lg-3"></div>
              <div className="col-12 col-lg-3"></div>
              <div className="col-12 col-lg-3"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


/*

        <div className="selling-whole">
          <div className="jumbotron jumbotron-fluid jumbotron-selling">
            <div className="container"></div>
          </div>
          <div className="container text-center mb-5">
            <div class="row">
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sell with Dealer</h5>
                    <p class="card-text">
                      Sell your car with help of our trusted dealers.
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Start Selling!
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sell it Yourself</h5>
                    <p class="card-text">
                      List your car on Mobilus and buyer will find it in no
                      time!
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Start Selling!
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Find car's value</h5>
                    <p class="card-text">
                      Estimate your car and find it's value.
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Find Out!
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sell through Agent</h5>
                    <p class="card-text">
                      Sell your car through agent from our trusted network.
                    </p>
                    <p class="card-text">All deals are protected!</p>
                    <button type="button" class="btn btn-primary">
                      Start Selling!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

*/