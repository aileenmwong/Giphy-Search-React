import React, { Component } from 'react';
import SingleGif from './SingleGif'
import Gif from './Gif'



class GifList extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('GL will recieve props');

  }
  componentWillMount() {
    console.log('GL will mount');
  }
  componentDidMount() {
    console.log('GL DID mount');
  }
  render() {
    console.log(this.props.gifData);
    console.log('GL rendering');
    return(
      <div id="pageWrapper">
        <div id="searchWrapper">
          <ul>
          {this.props.gifData.map((gif,i) => {
            return (
              <SingleGif
                gif={gif}
                key={i} />
            )
          }
          )}
          </ul>
          </div>
        <div id="changeGifWrapper">
          <button
          onClick={this.props.changeGif}
          disabled={this.props.isLoaded}> Change Gif </button>
          <Gif
          data={this.props.data}
           />
        </div>
      </div>
      )
  }
}

export default GifList;

