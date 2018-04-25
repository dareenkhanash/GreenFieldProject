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
        <DropdownButton title="Catagory" id="catB">
      <MenuItem eventKey="1">Driver</MenuItem>
      <MenuItem eventKey="2">Maintenance</MenuItem>
      <MenuItem eventKey="3">Job3</MenuItem>
      <MenuItem eventKey="4">Job4</MenuItem>
      </DropdownButton>
        <FormControl
          className="Sform-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Job Title"
        />
         <Button id='search-button' className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"> </span>
         </Button>
      </div>
    );
  }
}


export default Search;