// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <label>Band Name: </label>
          <input type='text' name='name' onChange={this.handleChange} value={this.state.name}></input>
          <input type='submit' value='Add Band'></input>
        </form>
      </div>
    )
  }
}

export default BandInput
