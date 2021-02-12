import React from "react";

export const NavigationBar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark elegant-color">
    <a class="navbar-brand" href="/projects/reactjs/mobilus/#/">
      Mobilus
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/">
            Search <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/selling">
            Sell Car
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/repair">
            Repair & Maintance
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/news">
            News Feed
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/shop">
            Shop
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/about">
            Abous Us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/mobilus/#/contact">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
