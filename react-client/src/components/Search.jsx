import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      Driver: ''

    };
    this.handleCatagoryChange  = this.handleCatagoryChange.bind(this);
    this.handleInputChange  = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.searchJobTitle(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

  handleCatagoryChange(e){
    console.log("high")
    this.setState({
      Driver: e.target.value
    })
  }

  render() {
    return (
      <div className="search-bar form-inline">  
      <div className="form-group">
        <select className="form-control selectpicker btn btn-default" id="catB">
          <option value="select">Select Catagory</option>
          <option onChange={this.handleCatagoryChange} value="Driver">Driver</option>
          <option value="HomeMaintenance">Home Maintenance</option>
          <option value="ComputerMaintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
          <option value="Others">Others</option>
        </select>
        </div>

      <FormControl
          className="Sform-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder="Job Title"
        />
         <Button id='search-button' className="btn btn-default hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
         </Button>
      </div>
    );
  }
}


export default Search;