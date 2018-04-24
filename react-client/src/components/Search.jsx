import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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