// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: ""})
  }


  render() {
    return(
      <div>
        Band Input
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange} />
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default BandInput




                      
                  