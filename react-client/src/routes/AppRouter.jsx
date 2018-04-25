import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import SignUpForm from '../components/SignUp.jsx';
import JobsForm from '../components/JobsForm.jsx';
import NavBar from '../components/Header.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Login from '../components/Login.jsx';
import Home from '../components/Home.jsx';
import Profile from '../components/profile.jsx';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<NavBar /><br /><br />
			<Switch>
			<Route  exact path = "/"  component = {Home}/>	
			<Route  path = "/signup" component = {SignUpForm} />				
			<Route  path = "/jobsForm" component = {JobsForm} />
			<Route  path = "/profile" component = {Profile} />			
			<Route  path = "/login"	component = {Login} />	
			<Route component = {NotFoundPage} />


			</Switch>
		</div>
	</BrowserRouter>

	)

export default AppRouter;