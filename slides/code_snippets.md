
```jsx
// JSX Code Example
const Names = () => {
  const names = ['John', 'Jill', 'Jack'];

  return (
    <div>
      <h2>Names</h2>

      {/* This is a list of names */}
      <ul className="names">
        {
          names.map(name =>
            <li className="name">{name}</li>
          )
        }
      </ul>
    </div>
  );
};

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


// VideoList
const VideoList = ({videos}) => {
  return (
    <ul className="col-md-4 list-group">
      {videos.map( (video) => <VideoListItem key={video.etag} video={video} /> )}
    </ul>
  )
}


// VideoListItem

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media"> 
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

// VideoPlayer

const VideoPlayer = ({video}) => {

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive  embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}
```

```css
// css code 

.search-bar {
  margin: 20px;
  text-align: center;
}

.search-bar input {
  width: 75%
}

.search-bar img {
  max-width: 64px;
}

.video-detail .details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list-group-item {
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #eee;
}
```