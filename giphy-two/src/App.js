import React, { Component } from 'react';
import GifList from './components/GifList';
import AddGifForm from './components/AddGifForm';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: {},
      inputGifTypeValue: '',
      inputAmountValue: '',
      gifList: [],
    };
    this.changeGif = this.changeGif.bind(this);
    this.handleInputGifTypeChange = this.handleInputGifTypeChange.bind(this);
    this.handleInputAmountValueChange = this.handleInputAmountValueChange.bind(this);
    this.handleGifSubmit = this.handleGifSubmit.bind(this)
  }

  componentWillMount() {
    console.log('App will mount');
  }

  componentDidMount() {
    console.log('App did mount');
    axios('http://api.giphy.com/v1/gifs/random?tag=ryan+gosling&api_key=6a124423bdf9492db7d5d021061da4ce')
    .then((res) => {
      console.log(res.data)
      this.setState({
        apiData: res.data.data,
      })
    })
  }

  handleInputGifTypeChange (event) {
    this.setState({
      inputGifTypeValue: event.target.value
    });

  }

  handleInputAmountValueChange (event) {
    this.setState({
      inputAmountValue: event.target.value
    });
  }

  handleGifSubmit(event) {
    event.preventDefault();
    event.target.content = '';
    axios(`https://api.giphy.com/v1/gifs/search?api_key=6a124423bdf9492db7d5d021061da4ce&q=${this.state.inputGifTypeValue}&limit=${this.state.inputAmountValue}`)
    .then(res => {
      console.log(res.data.data);
      this.setState({
        gifList: res.data.data,
      })
    })
  }

  changeGif() {
    console.log('App did mount');
    axios('http://api.giphy.com/v1/gifs/random?tag=ryan+gosling&api_key=6a124423bdf9492db7d5d021061da4ce')
    .then((res) => {
      console.log(res.data)
      this.setState({
        apiData: res.data.data,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the wonderful world of gifs</h1>
        <div id="searchWrapper">
        <AddGifForm
          handleGifSubmit={this.handleGifSubmit}
          handleInputGifTypeChange={this.handleInputGifTypeChange}
          handleInputAmountValueChange={this.handleInputAmountValueChange}
          inputGifTypeValue={this.state.inputGifTypeValue}
          inputAmountValue={this.state.inputAmountValue}
        />
        </div>
        <GifList
        gifData={this.state.gifList}
        changeGif={this.changeGif}
        data={this.state.apiData}
        />

      </div>
    );
  }
}

export default App;
