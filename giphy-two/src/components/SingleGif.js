import React, { Component } from 'react';

class SingleGif extends Component {

  render() {
    return (
      <div id="resultGifWrapper">
        <div id="resultGif">
          <img
          src={this.props.gif.images.downsized.url}
          />
        </div>
      </div>
      )
  }
}

export default SingleGif;

