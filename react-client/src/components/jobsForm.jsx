import React from 'react';
import axios from 'axios';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			from: '',
			to: '',
			createdAt: ''
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
		axios.post('http://127.0.0.1:3000/', this.state)
  			.then(function (response) {
    		console.log(response);
  			})
  			.catch(function (error) {
    		console.log(error);
  			});

		};

	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
			<label>User:
			<input type = "text" name = "user" placeholder = "Enter your username" autoFocus onChange = {this.onUserChange} />
			</label> <br />

			<label>Job Title:
			<input type = "text" name = "jobTitle" placeholder = "Enter your job title" autoFocus onChange = {this.onJobTitleChange} />
			</label> <br />

			<label>Job Description:
			<input type = "text" name = "jobDescription" placeholder = "Enter your job description" autoFocus onChange = {this.onJobDescriptionChange} />
			</label> <br />

			<label>Category:
			<input type = "text" name = "category" placeholder = "Enter your job category" autoFocus onChange = {this.onCategoryChange} />
			</label> <br />

			<label>From:
			<input type = "time" name = "from" placeholder = "From" autoFocus onChange = {this.onFromChange} />
			</label> <br />

			<label>To:
			<input type = "time" name = "to" placeholder = "To" autoFocus onChange = {this.onToChange} />
			</label> <br />

			<button>Add</button>
			</form>
			</div>
			)
	}
}


export default JobsForm;