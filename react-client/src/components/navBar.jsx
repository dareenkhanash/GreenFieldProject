import React from 'react';

const NavBar = (props) => (
  <div>
  <ul id = "home">
    <li><a className="active" href="#home">Home</a></li>
  </ul>
  <ul>
    <li><a href="#SingUp">Sign up</a></li>
    <li><a href="#LogIn">Log in</a></li>
  </ul>
  </div>
)

export default NavBar;