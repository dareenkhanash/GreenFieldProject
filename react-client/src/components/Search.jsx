import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.searchJobTitle(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">  

      <div className="form-group">
        <select className="form-control selectpicker btn btn-default" id="catB">
          <option value="select">Select Catagory</option>
          <option value="Driver">Driver</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Computer Maintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
          <option value="Others">Others</option>
        </select>
        </div>

      <FormControl
          className="Sform-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
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