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
      <div className="Login container"><br />
      <label>
        <form onSubmit={this.handleSubmit}>
          <FormGroup  bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl name="userName"
              autoFocus
              type="text"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl name="password" 
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <Button
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
        </label>
      </div>
    );
  }
}





export default Login;