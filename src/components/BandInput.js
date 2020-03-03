// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Band Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
