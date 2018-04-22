import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUpForm from './components/signup.jsx';
import JobsForm from './components/jobsForm.jsx';
import NavBar from './components/navBar.jsx';
import './styles/styles.scss'
import axios from 'axios';
//import Posts from './components/jobsPosts.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }


//  componentDidMount() {
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     const posts = response.data;
//     // console.log(response);
//     this.setState({items:posts});
//      console.log(this.state);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

  render () {
    return (
      <div>
        <div>
         <NavBar/>
        </div>
        <div>
         <SignUpForm/>
        </div>
     </div>
    
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));