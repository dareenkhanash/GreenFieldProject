import React from 'react';
import axios from 'axios';
import { Button, FormControl } from 'react-bootstrap';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			from: '',
			to: ''
		}
		this.onUserChange = this.onUserChange.bind(this);
		this.onJobTitleChange = this.onJobTitleChange.bind(this);
		this.onJobDescriptionChange = this.onJobDescriptionChange.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.onFromChange = this.onFromChange.bind(this);
		this.onToChange = this.onToChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onUserChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		
	};

	onJobTitleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	onJobDescriptionChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	onCategoryChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	onFromChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	onToChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit(event) {
		event.preventDefault();
		axios.post('/', this.state)
  			.then(function (response) {
    		console.log(response);
  			})
  			.catch(function (error) {
    		console.log(error);
  			});

		};

	render() {
		return (
			<div><br />
			<form onSubmit={this.handleSubmit}>
			<label>User:
			<FormControl type = "text" name = "user" placeholder = "Your Username" autoFocus onChange = {this.onUserChange} />
			</label> <br />

			<label>Job Title:
			<FormControl type = "text" name = "jobTitle" placeholder = "Your Job Title" autoFocus onChange = {this.onJobTitleChange} />
			</label> <br />

			<label>Job Description:
			<FormControl type = "text" name = "jobDescription" placeholder = "Your Job Description" autoFocus onChange = {this.onJobDescriptionChange} />
			</label> <br />

			<label>Category:
			<FormControl type = "text" name = "category" placeholder = "Your Job Category" autoFocus onChange = {this.onCategoryChange} />
			</label> <br />

			<label>From:
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus onChange = {this.onFromChange} />
			</label> <br />

			<label>To:
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus onChange = {this.onToChange} />
			</label> <br />

			<Button bsStyle="success" bsSize="large">Add</Button>
			</form>
			</div>
			)
	}
}


export default JobsForm;