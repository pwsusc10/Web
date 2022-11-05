import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtubeservice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
root.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>
);

