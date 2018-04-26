import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
class UserJobs extends React.Component {
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
    console.log(this.props.match.params.jobTitle)
    console.log(this.props.match.params.userName)
    this.onChange = this.onChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    // const posts = this.props.item;
    //  this.setState({states:posts});
  }
    onChange(e) {
      var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states});

    };
   componentDidMount() {
    var that =this
   	  axios.post('/userJob',{jobTitle:that.props.match.params.jobTitle,
        user:that.props.match.params.userName})
    .then(response => {
    const posts = response.data;
    console.log(posts);
    this.setState({states:posts});
    
  })
  .catch(function (error) {
    console.log(error);
  });
   }

    handleSubmit(event) {
         event.preventDefault();
        axios.put('/updateUser', this.state.states)
          .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
            console.log(error);
        });
    };
      // <label >*Password
      //    <FormControl type="password" name="password" placeholder="Password" autoFocus required
      //      onChange = {this.onChange}  
      //      />

      //   </label><br />
  
 
render() {
  
  return (
    <div className="container wrapper well"><br />
    <span id="req" className="wrapper">* required</span>
      <form onSubmit = {this.handleSubmit}>
      <Row>
		<Col md={4}>
	      <label >*Job Title
	        <FormControl type="text" name="name" placeholder="Name" autoFocus required
	        onChange = {this.onChange}  value={this.state.states.jobTitle}
	        />
	      </label>
      	</Col>
      	<Col md={4}>
        <label >*Job Description
          <FormControl type="number" name="phoneNumber" placeholder="Phone Number" required
            onChange={this.onChange} value={this.state.states.jobDescription}/>
          </label><br />
	    
	    </Col>
		<Col md={4}>
	       <label >* Category:
	        <FormControl type="email" name="email" placeholder="Email" required
	          onChange={this.onChange}  value={this.state.states.category} /> 
	        </label><br />
        </Col>
     </Row>
     <Row>
      	<Col md={4}>
	        <label >*from
	        <FormControl type="text" name="gender" placeholder="Gender" required
	          onChange={this.onChange}  value={this.state.states.from} />
	        </label><br />
        </Col>
		<Col md={4}>
    <label >to
           <FormControl type="text" name="nationality" placeholder="Nationality" 
            onChange={this.onChange} value={this.state.states.to} />
          </label><br />
        
	    </Col>
      	<Col md={4}>   
	         <Button type = "submit" bsStyle="success" bsSize="large">Update</Button> 
	    </Col>
	  </Row>
	 

      

      </form>
	</div>
    )
  }
}
export default UserJobs;
