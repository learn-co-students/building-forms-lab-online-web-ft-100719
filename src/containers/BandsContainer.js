import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import uuid from 'uuid'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => <li key={band.id}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: 'ADD_BAND', band: { name: name, id: uuid() } })
})

export default connect(state => ({ bands: state.bands }), mapDispatchToProps)(BandsContainer)
