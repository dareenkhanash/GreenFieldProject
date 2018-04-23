import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<header>
		<ul>
		<li><NavLink to = "/" activeClassName = "is-active" exact = {true}>Home</NavLink></li>
		<li><NavLink to = "/login" activeClassName = "is-active" >Login</NavLink></li>
		<li><NavLink to = "/signup" activeClassName = "is-active" >Sign up</NavLink></li>
		<li><NavLink to = "/jobsForm" activeClassName = "is-active" >Add Job</NavLink></li>
		</ul>

	</header>
	);

export default Header;