import React, { Component } from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import "./Contact.css";
import { OurMap } from "./contact_components/google_map";

export class Contact extends Component {
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };

  render() {
    return (
      <>
      <div className="jumbotron-contact-page-googlemap d-none d-lg-block hero-image-desktop-version-contact-page-googlemap">
        <OurMap></OurMap>
      </div>
      <div className="jumbotron-contact-page-googlemap d-block d-lg-none hero-image-mobile-version-contact-page-googlemap">
        <OurMap></OurMap>
      </div>
      <div className="contact-page-wrapper-wrapper">
        <div className="container" >
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="contact-form-wrapper-outer-outer">
                <div className="contact-form-wrapper-inner">
                  <form>
                  <div class="form-group">
                    <div className="text-center">
                      <h4>
                        Feel free to contact us!
                      </h4>
                    </div>
                    <label for="exampleInputEmail1">
                      Enter your first name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      Enter your second name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your Second Name"
                    />
                  </div>
                  <div class="form-group">
                  <label for="exampleInputEmail1">
                      Enter your e-mail
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <div className="social-icons-wrapper text-center">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <a href="https://www.google.com/" class="fa fa-facebook"></a>
                    <a href="https://www.google.com/" class="fa fa-twitter"></a>
                    <a href="https://www.google.com/" class="fa fa-google"></a>
                    <a href="https://www.google.com/" class="fa fa-youtube"></a>
                    <a href="https://www.google.com/" class="fa fa-instagram"></a>
                    <a href="https://www.google.com/" class="fa fa-phone"></a>
                  </div>
                </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

/*

      <div className="contact-whole">
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-lg-6">
              <div className="row p-0">
                <div className="col p-0">
                  <div className="map-container">
                    <OurMap></OurMap>
                  </div>
                </div>
              </div>
              <div className="row p-0">
                <div className="col p-0">
                  <div className="contact-info-container">
                    <h1 className="text-center contact-text">Contact Us</h1>
                    <br />
                    <MDBBtn color="indigo" social="fb">
                      <MDBIcon icon="phone" className="pr-1" />
                    </MDBBtn>
                    <span className="contact-text">9(999)-999-99-99</span>
                    <br />
                    <MDBBtn color="light-green" social="fb">
                      <MDBIcon fab icon="whatsapp" />
                    </MDBBtn>
                    <span className="contact-text">9(999)-999-99-99</span>
                    <br />
                    <MDBBtn color="indigo" social="fb">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                    <span className="contact-text">
                      facebook.com/examplepage
                    </span>
                    <br />
                    <MDBBtn color="light-blue" social="tw">
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                    <span className="contact-text">
                      twitter.com/examplepage
                    </span>
                    <br />
                    <MDBBtn color="red" social="yt">
                      <MDBIcon fab icon="youtube" />
                    </MDBBtn>
                    <span className="contact-text">
                      youtube.com/examplechannel
                    </span>
                    <br />
                    <MDBBtn color="indigo" social="vk">
                      <MDBIcon fab icon="vk" />
                    </MDBBtn>
                    <span className="contact-text">vk.com/examplepage</span>
                    <br />
                    <MDBBtn color="yellow" social="email">
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <span className="contact-text">gmail.com/examplemail</span>
                    <br />
                    <MDBBtn color="green" social="email">
                      <MDBIcon icon="home" />
                    </MDBBtn>
                    <span className="contact-text">example address</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="contact-form-container">
                <h1 className="text-center">Mail Us</h1>
                <br />
                <div className="container">
                  <form>
                    <div class="form-group">
                      <label for="EmailContactUs">Your E-mail</label>
                      <input
                        type="email"
                        class="form-control"
                        id="EmailContactUs"
                        placeholder="E-mail"
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="FirstName">Your first name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FirstName"
                          placeholder="first name"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="SecondName">Your second name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="SecondName"
                          placeholder="Second name"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="subjectContactUs">Subject</label>
                      <input
                        type="text"
                        class="form-control"
                        id="subjectContactUs"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group">
                      <label for="messageTextContactUs">Your Message</label>
                      <textarea
                        class="form-control"
                        id="messageTextContactUs"
                        rows="8"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block btn-lg"
                      id="buttonContactUs"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-0"></div>
        </div>
      </div>

*/