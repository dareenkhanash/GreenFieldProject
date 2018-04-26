import React from 'react';
//import axios from 'axios';
import $ from 'jquery';

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts', 
      success: (data) => {
      console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
  	<ul id = "posts">
        { this.state.items.map(item => <li>{item.title}</li>)}
      </ul>
  }
}

export default Posts;