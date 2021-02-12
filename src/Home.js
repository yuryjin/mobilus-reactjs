import React, { Component } from "react";
import "./Home.css";
import "bootstrap";
import "react-bootstrap";
import { Slider } from "./Slider";
//import SweetAlert from 'sweetalert2-react';

export class Home extends Component {
  state = {
    collapseID: "",
    UsedcollapseID: "",
    PricecollapseID: "",
    DistanceCollapseID: "",
    YearcollapseID: "",
    BrandcollapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleUsedCollapse = UsedcollapseID => () => {
    this.setState(prevState => ({
      UsedcollapseID:
        prevState.UsedcollapseID !== UsedcollapseID ? UsedcollapseID : ""
    }));
  };

  togglePriceCollapse = PricecollapseID => () => {
    this.setState(prevState => ({
      PricecollapseID:
        prevState.PricecollapseID !== PricecollapseID ? PricecollapseID : ""
    }));
  };

  toggleDistanceCollapse = DistancecollapseID => () => {
    this.setState(prevState => ({
      DistancecollapseID:
        prevState.DistancecollapseID !== DistancecollapseID
          ? DistancecollapseID
          : ""
    }));
  };

  toggleYearCollapse = YearcollapseID => () => {
    this.setState(prevState => ({
      YearcollapseID:
        prevState.YearcollapseID !== YearcollapseID ? YearcollapseID : ""
    }));
  };

  toggleBrandCollapse = BrandcollapseID => () => {
    this.setState(prevState => ({
      BrandcollapseID:
        prevState.BrandcollapseID !== BrandcollapseID ? BrandcollapseID : ""
    }));
  };

  render() {
    return (
      <>
        <div className="papa">
          <div className="jumbotron jumbotron-home d-none d-lg-block hero-image-desktop-version-home">
            <div className="container"></div>
          </div>
          <div className="jumbotron jumbotron-home d-block d-lg-none hero-image-mobile-version-home">
            <div className="container"></div>
          </div>
          <div className="container">
            <div class="input-group md-form form-sm form-2 pl-0">
              <input
                class="form-control my-0 py-1 light-blue-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text light-blue lighten-3"
                  id="basic-text1"
                >
                  <i class="fas fa-search text-grey" aria-hidden="true"></i>
                </span>
              </div>
              <div class="input-group-append">
                <span
                  class="input-group-text light-blue lighten-3 m-xs-right btn"
                  data-toggle="collapse"
                  href="#menuExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="menuExample"
                  onClick={this.toggleCollapse("basicCollapse")}
                  style={{ marginBottom: "1rem" }}
                >
                  <i class="fas fa-tasks text-grey" aria-hidden="true">
                    &nbsp;
                  </i>
                  Filters
                </span>
              </div>
            </div>
            <div
              class="collapse"
              id="menuExample"
              isOpen={this.state.collapseID}
            >
              <div className="row">
                <div className="col">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#usedCollapse"
                      aria-expanded="false"
                      aria-controls="usedCollapse"
                    >
                      New/Used&nbsp;<i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                  <div class="collapse show" id="usedCollapse">
                    <div class="card card-body">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="AllOption_Used"
                        />
                        <label
                          class="custom-control-label"
                          for="AllOption_Used"
                        >
                          All
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="NewOption_Used"
                        />
                        <label
                          class="custom-control-label"
                          for="NewOption_Used"
                        >
                          New
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="UsedOption_Used"
                        />
                        <label
                          class="custom-control-label"
                          for="UsedOption_Used"
                        >
                          Used
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#PriceCollapse"
                      aria-expanded="false"
                      aria-controls="PriceCollapse"
                    >
                      Price&nbsp;<i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                  <div
                    class="collapse show"
                    id="PriceCollapse"
                    isOpen={this.state.PricecollapseID}
                  >
                    <form>
                      <div class="form-group">
                        <label for="formControlRange">Price range</label>
                        <Slider />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#DistanceCollapse"
                      aria-expanded="false"
                      aria-controls="DistanceCollapse"
                    >
                      Distance&nbsp;<i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                  <div
                    className="collapse show"
                    id="DistanceCollapse"
                    isOpen={this.state.DistancecollapseID}
                  >
                    <form>
                      <div class="form-group">
                        <label for="formControlRange">Price range</label>
                        <input
                          type="range"
                          class="form-control-range"
                          id="formControlRange"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#YearCollapse"
                      aria-expanded="false"
                      aria-controls="YearCollapse"
                    >
                      Year&nbsp;<i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                  <div
                    class="collapse show"
                    id="YearCollapse"
                    isOpen={this.state.YearcollapseID}
                  >
                    <form>
                      <div class="form-group">
                        <label for="formControlRange">Price range</label>
                        <input
                          type="range"
                          class="form-control-range"
                          id="formControlRange"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#colorColapse"
                    aria-expanded="false"
                    aria-controls="colorColapse"
                  >
                    Color&nbsp;<i class="fas fa-caret-down"></i>
                  </button>
                  <div class="collapse show" id="colorColapse">
                    <div class="card card-body">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="AllOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="AllOption_Color"
                              >
                                All
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="BlueOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="BlueOption_Color"
                              >
                                Blue
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="RedOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="RedOption_Color"
                              >
                                Red
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="GreenOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="GreenOption_Color"
                              >
                                Green
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="YellowOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="YellowOption_Color"
                              >
                                Yellow
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="PurpleOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="PurpleOption_Color"
                              >
                                Purple
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="AquaOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="AquaOption_Color"
                              >
                                Aqua
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="SilverOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="SilverOption_Color"
                              >
                                Silver
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="OrangeOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="OrangeOption_Color"
                              >
                                Orange
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="BrownOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="BrownOption_Color"
                              >
                                Brown
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="BlackOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="BlackOption_Color"
                              >
                                Black
                              </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="WhiteOption_Color"
                              />
                              <label
                                class="custom-control-label"
                                for="WhiteOption_Color"
                              >
                                White
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#engineCollapse"
                    aria-expanded="false"
                    aria-controls="engineCollapse"
                  >
                    Engine&nbsp;<i class="fas fa-caret-down"></i>
                  </button>
                  <div class="collapse show" id="engineCollapse">
                    <div class="card card-body">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="AllOption_Engine"
                        />
                        <label
                          class="custom-control-label"
                          for="AllOption_Engine"
                        >
                          All
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="GasOption_Engine"
                        />
                        <label
                          class="custom-control-label"
                          for="GasOption_Engine"
                        >
                          Gas
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="DieselOption_Engine"
                        />
                        <label
                          class="custom-control-label"
                          for="DieselOption_Engine"
                        >
                          Diesel
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="PetrolOption_Engine"
                        />
                        <label
                          class="custom-control-label"
                          for="PetrolOption_Engine"
                        >
                          Petrol
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="HybridOption_Engine"
                        />
                        <label
                          class="custom-control-label"
                          for="HybridOption_Engine"
                        >
                          Hybrid
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#sellerColapse"
                    aria-expanded="false"
                    aria-controls="sellerColapse"
                  >
                    Seller&nbsp;<i class="fas fa-caret-down"></i>
                  </button>
                  <div class="collapse show" id="sellerColapse">
                    <div class="card card-body">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="AllOption_Seller"
                        />
                        <label
                          class="custom-control-label"
                          for="AllOption_Seller"
                        >
                          All
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="OwnerOption_Seller"
                        />
                        <label
                          class="custom-control-label"
                          for="OwnerOption_Seller"
                        >
                          Owner
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="DealerOption_Seller"
                        />
                        <label
                          class="custom-control-label"
                          for="DealerOption_Seller"
                        >
                          Dealer
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="AgentOption_Seller"
                        />
                        <label
                          class="custom-control-label"
                          for="AgentOption_Seller"
                        >
                          Agent
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#countryColapse"
                    aria-expanded="false"
                    aria-controls="countryColapse"
                  >
                    Country&nbsp;<i class="fas fa-caret-down"></i>
                  </button>
                  <div class="collapse show" id="countryColapse">
                    <div class="card card-body">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="AllOption_Country"
                        />
                        <label
                          class="custom-control-label"
                          for="AllOption_Country"
                        >
                          All
                        </label>
                      </div>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#BrandCollapse"
                      aria-expanded="false"
                      aria-controls="BrandCollapse"
                    >
                      Brand&nbsp;<i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                  <div
                    className="collapse show"
                    id="BrandCollapse"
                    isOpen={this.state.BrandcollapseID}
                  >
                    <div class="card card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button
                      class="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#ModelCollapse"
                      aria-expanded="false"
                      aria-controls="ModelCollapse"
                    >
                      Model&nbsp;<i class="fas fa-caret-down"></i>
                    </button>
                  </div>
                  <div
                    className="collapse show"
                    id="ModelCollapse"
                    isOpen={this.state.BrandcollapseID}
                  >
                    <div class="card card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
}


/*

<SweetAlert show="true" title="Message" text="This site is for demonstration purposes only, showcasing author's skills. This site isn't real, you can't purchase car from here." onConfirm={this.hideAlert} />

*/