import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import SignUpForm from '../components/SignUp.jsx';
import JobsForm from '../components/JobsForm.jsx';
import Header from '../components/Header.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Login from '../components/Login.jsx';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
			<Route path = "/" exact = {true} />	
			<Route path = "/signup" component = {SignUpForm} />				
			<Route path = "/jobsForm" component = {JobsForm} />		
			<Route path = "/login"	component = {Login} />	
			<Route component = {NotFoundPage} />


			</Switch>
		</div>
	</BrowserRouter>

	)

export default AppRouter;