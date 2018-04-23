import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';


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
		axios.post('/job', this.state.states)
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
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>User</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "text" name = "user" placeholder = "Username" autoFocus onChange = {this.onChange} />
			</label></Col>
			<Col md={2}>
			<span>Job Title</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "text" name = "jobTitle" placeholder = "Job Title" autoFocus onChange = {this.onChange} />
			</label></Col>
			<Col md={1}>
			</Col>
			</Row> <br />


			<Row>
			<Col md={1}>
			</Col> 
			<Col md={2}>
			<span>Job Description</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "text" name = "jobDescription" placeholder = "Job Description" autoFocus onChange = {this.onChange} />
			</label></Col>
			<Col md={2}>
			<span>Category</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "text" name = "category" placeholder = "Job Category" autoFocus onChange = {this.onChange} />
			</label> </Col>
			<Col md={1}>
			</Col> 
			</Row><br />

			<Row>
			<Col md={1}>
			</Col> 
			<Col md={2}>
			<span>From</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus onChange = {this.onChange} />
			</label> </Col>
			<Col md={2}>
			<span>To</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus onChange = {this.onChange} />
			</label></Col>
			<Col md={1}>
			</Col>
			</Row><br /><br />
			    <Button type="submit" bsSize="large">
				      Submit
			    </Button>	

			</form>
			</div>
			)
	}
}


export default JobsForm;