import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';


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
			<div className="container-fluid"><br />
			<form onSubmit={this.handleSubmit}>
			<Row>
			<Col md="1">
			</Col>
			<Col md="2">
			<span>User</span>
			</Col>
			<Col md="3">
			<label >
			<FormControl type = "text" name = "user" placeholder = "Username" autoFocus onChange = {this.onUserChange} />
			</label></Col>
			<Col md="2">
			<span>Job Title</span>
			</Col>
			<Col md="3">
			<label >
			<FormControl type = "text" name = "jobTitle" placeholder = "Job Title" autoFocus onChange = {this.onJobTitleChange} />
			</label></Col>
			<Col md="1">
			</Col>
			</Row> <br />


			<Row>
			<Col md="1">
			</Col> 
			<Col md="2">
			<span>Job Description</span>
			</Col>
			<Col md="3">
			<label >
			<FormControl type = "text" name = "jobDescription" placeholder = "Job Description" autoFocus onChange = {this.onJobDescriptionChange} />
			</label></Col>
			<Col md="2">
			<span>Category</span>
			</Col>
			<Col md="3">
			<label >
			<FormControl type = "text" name = "category" placeholder = "Job Category" autoFocus onChange = {this.onCategoryChange} />
			</label> </Col>
			<Col md="1">
			</Col> 
			</Row><br />

			<Row>
			<Col md="1">
			</Col> 
			<Col md="2">
			<span>From</span>
			</Col>
			<Col md="3">
			<label >
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus onChange = {this.onFromChange} />
			</label> </Col>
			<Col md="2">
			<span>To</span>
			</Col>
			<Col md="3">
			<label >
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus onChange = {this.onToChange} />
			</label></Col>
			<Col md="1">
			</Col>
			</Row><br /><br />
			    <Button bsStyle="success" bsSize="large">
				      Submit
			    </Button>	
			</form>
			</div>
			)
	}
}


export default JobsForm;