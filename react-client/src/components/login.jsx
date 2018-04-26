import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			userName: '',
			password: ''
			}
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
		var that=this
		event.preventDefault();
		axios.post('/login', this.state.states)
  			.then(function (response) {
    		window.location.href = "/";
  			})
  			.catch(function (error) {
    		console.log(error);
  			});

		};

		render() {
    return (
       <div className="container">
         <div className="wrapper">
           <form className="form-signin" onSubmit={this.handleSubmit}>
            <h3 className="form-signin-heading">
                <img id="loginimg" src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"  alt="User" />
                <br /><br />
                <b id='b'>User Name</b>
            </h3>

            <FormControl id='loguser' type="text" className="form-control" name="userName" onChange={this.onChange} placeholder="Username" required autoFocus /><br />
            <FormControl id='logpass' type="password" className="form-control" name="password" onChange={this.onChange} placeholder="Password" required /><br />

            <button id="logb" className="btn btn-lg btn-primary" type="Submit">Login</button>
        </form>
    </div>
</div>
    );
  }
}





export default Login;