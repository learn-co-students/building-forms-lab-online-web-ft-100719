import React, { Component } from 'react';

class Bands extends Component {

  render() {
    const bandList = this.props.bands.map((band, index) => {
      return <li key={index}> {band.name} </li>     
    })

    return (
      <div>
        <h2>Bands</h2>
        <ul>
        {bandList}
        </ul>  
      </div>
    );
  }
}

//add arguments to connect as needed



export default Bands;
