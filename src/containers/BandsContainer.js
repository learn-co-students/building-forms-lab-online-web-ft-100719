import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../actions/bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}></BandInput>
        {this.props.bands.map((band) => <li>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
