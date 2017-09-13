import React, { Component } from 'react';

class Gif extends Component {

  render() {
    return (
      <div>
      <img
      src={this.props.data.image_original_url}
       />
      </div>
      )
  }
}

export default Gif;
