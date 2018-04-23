import React from 'react';
import axios from 'axios';
import $ from 'jquery';


class SignUpForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {states:{
        name: '',
        userName: '',
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
        event.preventDefault();
        axios.post('/', this.state.states)
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
      <form onSubmit = {this.handleSubmit}>
      <label >Name:
        <input type="text" name="name" placeholder="Name" autoFocus
        onChange = {this.onChange}
        />
      </label><br />
      <label >User Name:
        <input type="text" name="userName" placeholder="User Name" 
        onChange = {this.onChange}
        />
      </label><br />
       <label >Email: 
        <input type="email" name="email" placeholder="Email" 
          onChange={this.onChange} />
        </label><br />
        
        <label >Gender: 
        <input type="text" name="gender" placeholder="Gender" 
          onChange={this.onChange} />
        </label><br />
        
        <label >Phone Number: 
        <input type="number" name="phoneNumber" placeholder="Phone Number" 
          onChange={this.onChange} />
        </label><br />
        
        <label >Address: 
        <input type="text" name="address" placeholder="Address" 
          onChange={this.onChange} />
        </label><br />
        
        <label >Age: 
         <input type="number" name="age" placeholder="Age" 
          onChange={this.onChange} />
        </label><br />
        
        <label >Nationality: 
         <input type="text" name="nationality" placeholder="Nationality" 
          onChange={this.onChange} />
        </label><br />
      <button>Submit</button>           
      </form>
	</div>
    )
  }
}
 

export default SignUpForm;

