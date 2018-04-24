import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter.jsx';


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

}

ReactDOM.render(<AppRouter />, document.getElementById('app'));