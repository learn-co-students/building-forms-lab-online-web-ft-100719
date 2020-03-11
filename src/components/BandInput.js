// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name</label>
          <input type='text' value={this.state.name} onChange={this.handleChange} />
          <input type='submit' value="Add Band" />
        </form>
      </div>
    )
  }
}

export default BandInput
