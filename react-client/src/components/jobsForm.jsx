import React from 'react';
import axios from 'axios';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			from: '',
			to: ''}

		}
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(e) {
	  var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states});
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
			<div>
			<form onSubmit={this.handleSubmit}>
			<label>User:
			<input type = "text" name = "user" placeholder = "Enter your username" autoFocus onChange = {this.onChange} />
			</label> <br />

			<label>Job Title:
			<input type = "text" name = "jobTitle" placeholder = "Enter your job title" autoFocus onChange = {this.onChange} />
			</label> <br />

			<label>Job Description:
			<input type = "text" name = "jobDescription" placeholder = "Enter your job description" autoFocus onChange = {this.onChange} />
			</label> <br />

			<label>Category:
			<input type = "text" name = "category" placeholder = "Enter your job category" autoFocus onChange = {this.onChange} />
			</label> <br />

			<label>From:
			<input type = "time" name = "from" placeholder = "From" autoFocus onChange = {this.onChange} />
			</label> <br />

			<label>To:
			<input type = "time" name = "to" placeholder = "To" autoFocus onChange = {this.onChange} />
			</label> <br />

			<button>Add</button>
			</form>
			</div>
			)
	}
}


export default JobsForm;