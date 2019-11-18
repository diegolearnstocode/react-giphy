import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const gifID = (this === 'undefined') ? "5QW76Ww9bquHdg1fTv" : this.props.gif.id;
    const src = "https://media1.giphy.com/media/" + `${gifID}` + "/giphy.gif";

    return (
      <img src={ src } alt="" className="gif"/>
    );
  }
}

export default Gif;
