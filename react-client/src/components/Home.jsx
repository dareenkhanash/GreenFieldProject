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

    var that =this;
     axios.post('/someJobs',{query:query})
          .then(function (response) {
            const posts = response.data;
            that.setState({items:posts});

        })
          .catch(function (error) {
            console.log(error);
        });
  
  }

//make new get requests for each filter
  componentDidMount() {
    axios.get('/jobs')
    .then(response => {
    const posts = response.data;
    // console.log(response);
    this.setState({items:posts});
    
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
    this.state.items.forEach(function(item) {
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
