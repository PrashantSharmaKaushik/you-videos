import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
import { ViewVideo , VideoList , Search} from "./containers";
import searchYouTube from 'youtube-api-search';

const KEY = "AIzaSyC06F2cPmmfxiJSa7XXdTrQ5VjbmC4rkyU";
const playlist_id = "PLVbP054jv0KomLUSyg27QyHNdckTOSKGr";

class App extends Component{

  state = {
    videoList: [],
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    texttosearch : ""
  }

  componentDidMount() {
    searchYouTube({ key: KEY, term: "", maxResults: 20}, (videos) => {
      this.setState({ videoList: videos });
    }); 
  }

  playThisVideo = (id) => {
    this.setState({ url: `https://www.youtube.com/watch?v=${id}`})
  }                   

  enterText = (e) => {
    let { value } = e.target;
    this.setState({ texttosearch: value }, () => { });
  }

  searchResult = () => {
    searchYouTube({ key: KEY, term: this.state.texttosearch, maxResults: 20 }, (videos) => {
      this.setState({ videoList: videos });
    });
  }

  render() {
    return (
      <div className="app">
        <Container>
          <Search onChange={this.enterText} searchResult={this.searchResult}/>
          <ViewVideo url={this.state.url}/>
          <VideoList list={this.state.videoList} playThisVideo={this.playThisVideo}/>
        </Container>
      </div>
    );
  }
}

export default App;
