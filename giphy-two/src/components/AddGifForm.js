import React, { Component } from "react";
import Gif from '../components/Gif';

class AddGifForm extends Component {
  render() {
    return(
      <div>
        <form
          className="add-gif-form"
          onSubmit={this.props.handleGifSubmit}
        >
        <input
          type="text"
          value={this.props.inputGifTypeValue}
          name="gifImage"
          placeholder="What type of gif?"
          onChange={this.props.handleInputGifTypeChange}
        /><br/>
        <input
          type="text"
          value={this.props.inputAmountValue}
          name="amountVal"
          placeholder="How Many Gifs"
          onChange={this.props.handleInputAmountValueChange}
        /><br/>
        <button id="submit">Get A Gif!</button>
        </form>
      </div>
      );
  }
}

export default AddGifForm;
