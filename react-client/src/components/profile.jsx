import React from 'react';
import axios from 'axios';
import HomeDisplay from './HomeDisplay.jsx';
import Search from './Search.jsx';
import UserInfo from './UserInfo.jsx';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobs: [],
      user:[]
    }
  }


//make new get requests for each filter
  componentDidMount() {
    axios.get('/userJobs')
    .then(response => {
    const posts = response.data;
    console.log("response");
    this.setState({jobs:posts});
    
    
  }).catch(function (error) {
    console.log(error);
  });
  this.getUserInfo();
}

getUserInfo(){
    axios.get('/userInfo')
    .then(response => {
    const posts = response.data;
    console.log(posts);
    this.setState({user:posts});
    
  })
  .catch(function (error) {
    console.log(error);
  });
}

render() {
  var arr = [];
  if ( this.state.jobs.length === 0) {
    return (
      <h1> still loading </h1>
      )
  } else {
    this.state.jobs.forEach(function(item) {
      arr.push(<HomeDisplay item={item} />)
    })
  }
  return (
  
    <div>
    <br/>
    <div>
    <UserInfo user={this.state.user}/>
    </div>
    <div>
    {arr}
    </div>
    </div>
    
    )
}
}
export default Profile;
