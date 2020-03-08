// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
      name: ''
  };
  

  handleOnChange = (event) => {
    this.setState({
     name: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    this.props.addBand(this.state);
  }
  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
        <input type="submit" />
      </form>
    )
  };
}


export default BandInput
