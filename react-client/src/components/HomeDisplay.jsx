import React from 'react';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
class HomeDisplay extends React.Component {
  constructor(props) {
    super(props);
    
  }


 
render() {
  
  return (
  	<div>
  	<div className="jobsDiv">
  		<Row>
			
			<Col md={6}>
			<span><b>Job Title : </b></span>
			<span>{this.props.item.jobTitle}</span>
			</Col>
			<Col md={6}>
			<span><b>Job Category : </b></span>
			<span>{this.props.item.category}</span>
			</Col>
			
			
		</Row>
		<Row>
			

			<Col md={12}>
			<span><b>Description : </b></span>
			<span>{this.props.item.jobDescription}</span>
			</Col>
			
		</Row>
        <Row>
			
            <Col md={4}>
            <span><b>From : </b></span>
			<span>{this.props.item.from}</span>
			</Col>
			<Col md={4}>
			<span><b>To : </b></span>
			<span>{this.props.item.to}</span>
			</Col>
			<Col md={4}>
			<span><b>Created at : </b></span>
			<span>{this.props.item.created_at}</span>
			</Col>
		</Row>
    
    
    
    
    </div>
    </div>
    )
  }
}
export default HomeDisplay;
