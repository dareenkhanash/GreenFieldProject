import React from 'react';

class HomeDisplay extends React.Component {
  constructor(props) {
    super(props);
    
  }


 
render() {
  
  return (
    <h1>{this.props.item.jobTitle}</h1>)
  }
}
export default HomeDisplay;
