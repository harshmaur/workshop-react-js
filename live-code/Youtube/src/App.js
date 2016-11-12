import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import _ from 'lodash';

const API_KEY = "AIzaSyC7Lzx7d_0FqwA7Xa-BXd7RkvTRlQb_gLs"



class App extends Component {

  constructor() {
    super()
    this.state = {
      term: "reactjs",
      videos: [],
      selectedVideo : null
    }
  }

  componentDidMount(){
    this.videoSearch(this.state.term)
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term}, (videos) => {
      this.setState({videos:videos, selectedVideo: videos[0]})
    })
  }

  render() {

    const searchVideo = _.debounce((term) => this.videoSearch(term), 400)

    return (
      <div>
      <SearchBar term={this.state.term} onInputChange={searchVideo}/>
      <VideoList videos={this.state.videos} onVideoChange={(selectedVideo) => this.setState({selectedVideo})} />
      { this.state.selectedVideo &&  <VideoPlayer video={this.state.selectedVideo} /> }
    </div>
    );
  }
}

export default App;
