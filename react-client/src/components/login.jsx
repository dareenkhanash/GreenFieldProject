import React from 'react';

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
}




export default Login;