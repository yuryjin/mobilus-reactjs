import React, { Component } from "react";
import "./Slider.css";

export class Slider extends Component {
  render() {
    return (
      <>
        <div class="middle">
          <div class="multi-range-slider">
            <input type="range" id="input-left" min="0" max="100" value="0" />
            <input
              type="range"
              id="input-right"
              min="0"
              max="100"
              value="100"
            />

            <div class="slider">
              <div class="track"></div>
              <div class="range"></div>
              <div class="thumb left"></div>
              <div class="thumb right"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
