import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';

import Search from './components/Search';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import _ from 'lodash';

const API_KEY = "AIzaSyCzKKXZ2tGlIcKNAtwKNGhbYBP5CQIKqtI";



class App extends Component {
  constructor() {
    super();
    this.state = {
      videos : [],
      selectedVideo : null,
      term: ''
    }
  }

  componentWillMount() {
    this.videoSearch('reactJS')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <Search onSearchChange={videoSearch}/>
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
      
    );
  }
}

export default App;
