import React from 'react';
import axios from 'axios';
import $ from 'jquery';


class SignUpForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        userName: '',
        email: '',
        gender: '',
        phone: '',
        address: '',
        age: '',
        nationality: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onPhoneNumberChange  = this.onPhoneNumberChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onNationalityChange  = this.onNationalityChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }
    onNameChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onUserNameChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onEmailChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onGenderChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onPhoneNumberChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onAddressChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onAgeChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onNationalityChange(e) {
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
      <form onSubmit = {this.handleSubmit}>
      <label >Name:
        <input type="text" name="name" placeholder="Name" autoFocus
        onChange = {this.onNameChange}
        />
      </label><br />
      <label >User Name:
        <input type="text" name="userName" placeholder="User Name" 
        onChange = {this.onUserNameChange}
        />
      </label><br />
       <label >Email: 
        <input type="email" name="email" placeholder="Email" 
          onChange={this.onEmailChange} />
        </label><br />
        
        <label >Gender: 
        <input type="text" name="gender" placeholder="Gender" 
          onChange={this.onGenderChange} />
        </label><br />
        
        <label >Phone Number: 
        <input type="number" name="phone" placeholder="Phone Number" 
          onChange={this.onPhoneNumberChange} />
        </label><br />
        
        <label >Address: 
        <input type="text" name="address" placeholder="Address" 
          onChange={this.onAddressChange} />
        </label><br />
        
        <label >Age: 
         <input type="number" name="age" placeholder="Age" 
          onChange={this.onAgeChange} />
        </label><br />
        
        <label >Nationality: 
         <input type="text" name="nationality" placeholder="Nationality" 
          onChange={this.onNationalityChange} />
        </label><br />
      <button>Submit</button>           
      </form>
	</div>
    )
  }
}
 

export default SignUpForm;

