import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('sungpyo');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAiOwfRcPr9pVxiDGXNFfGpsh18xPXE7IQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  
  return <>
    {/* <Searchtext /> */}
    <div className="navbar">
      <span>Youtube</span>
      
    </div>
    <VideoList videos={videos} />
  </>;
}

export default App;
