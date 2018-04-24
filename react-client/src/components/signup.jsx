import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Button, FormControl } from 'react-bootstrap';


class SignUpForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {states:{
        name: '',
        userName: '',
        password: '',
        email: '',
        gender: '',
        phoneNumber: '',
        address: '',
        age: '',
        nationality: ''}
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }
    onChange(e) {
      var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states});
    };

    handleSubmit(event) {
        // event.preventDefault();
        axios.post('/signup', this.state.states)
          .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
            console.log(error);
        });
    };
       
 render() {
    return (
    <div className="container"><br />
      <form onSubmit = {this.handleSubmit}>
      <label className="well">Name
        <FormControl type="text" name="name" placeholder="Name" autoFocus
        onChange = {this.onChange}
        />
      </label><br />
      <label className="well">User Name
        <FormControl type="text" name="userName" placeholder="User Name" 
        onChange = {this.onChange}
        />
      </label><br />
      <label className="well">Password
        <FormControl type="password" name="password" placeholder="Password" autoFocus
        onChange = {this.onChange}
        />
      </label><br />
       <label className="well">Email:
        <FormControl type="email" name="email" placeholder="Email" 
          onChange={this.onChange} />
        </label><br />
        
        <label className="well">Gender
        <FormControl type="text" name="gender" placeholder="Gender" 
          onChange={this.onChange} />
        </label><br />
        
        <label className="well">Phone Number 
        <FormControl type="number" name="phoneNumber" placeholder="Phone Number" 
          onChange={this.onChange} />
        </label><br />
        
        <label className="well">Address
        <FormControl type="text" name="address" placeholder="Address" 
          onChange={this.onChange} />
        </label><br />
        
        <label className="well">Age
         <FormControl type="number" name="age" placeholder="Age" 
          onChange={this.onChange} />
        </label><br />
        
        <label className="well">Nationality
         <FormControl type="text" name="nationality" placeholder="Nationality" 
          onChange={this.onChange} />
        </label><br /><br />


      <Button type = "submit" bsStyle="success" bsSize="large">Submit</Button> 

      </form>
	</div>
    )
  }
}
 

export default SignUpForm;

