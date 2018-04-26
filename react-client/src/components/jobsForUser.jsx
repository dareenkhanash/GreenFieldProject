import React from 'react';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class JobsForUser extends React.Component {
  constructor(props) {
    super(props);
    
  }


 
render() {
  
  return (
    <div>
    <div className="jobsDiv">
    <Link to = {`/UserJobs/${ this.props.item.jobTitle }/${ this.props.item.user }`} activeClassName = "is-active" >
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
      
            <Col md={6}>
            <span><b>From : </b></span>
      <span>{this.props.item.from}</span>
      </Col>
      <Col md={6}>
      <span><b>To : </b></span>
      <span>{this.props.item.to}</span>
      </Col>
      
      
      
    </Row>
     <Row>
     <Col md={8}>
      
      </Col>
     <Col md={4}>
      <span><b>Created at : </b></span>
      <span>{this.props.item.created_at}</span>
      </Col>
     </Row>
    
    
    
    </Link>
    </div>
    </div>

    )
  }
}
export default JobsForUser;
