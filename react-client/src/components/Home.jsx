import React from 'react';
import axios from 'axios';
import HomeDisplay from './HomeDisplay.jsx';
import Search from './Search.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  searchJobTitle(query) {
    //console.log("search" + query)
    let jobTitles = this.state.items.jobTitle.filter((title) => {
      return title.jobTitle.includes(query)
    });
    //console.log(jobTitles)
    this.setState({jobTitles: jobTitles})
  }

//make new get requests for each filter
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
    const posts = response.data;
    // console.log(response);
    this.setState({items:posts});
     console.log(this.state);
  })
  .catch(function (error) {
    console.log(error);
  });
}

render() {
  var arr = [];
  if ( this.state.items.length === 0) {
    return (
      <h1> still loading </h1>
      )
  } else {
    this.state.items.slice(80).forEach(function(item) {
      arr.push(<HomeDisplay item={item} />)
    })
  }
  return (
  
    <div>
    <br/>
    <div>
    <Search searchJobTitle={this.searchJobTitle.bind(this)}/>
    </div>
    <div>
    {arr}
    </div>
    </div>
    
    )
}
}
export default Home;
