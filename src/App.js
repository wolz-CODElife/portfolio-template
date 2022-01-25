import React from 'react';
import './App.css'
import { IconGithub, IconLinkedin, IconsEmail, IconTwitter } from './icon';

const App = () => {
  return <div className='hero'>
    <div className="left">
      <h1>John Doe</h1>
      <h3>Geographer and Videographer</h3>
      <p>
        <a href="/" target="_blank" rel='noppener noreferral'><IconsEmail /></a>
        <a href="/" target="_blank" rel='noppener noreferral'><IconLinkedin /></a>
        <a href="/" target="_blank" rel='noppener noreferral'><IconGithub /></a>
        <a href="/" target="_blank" rel='noppener noreferral'><IconTwitter /></a>
      </p>
    </div>
    <div className="right">
      <img src="https://i.postimg.cc/vmrR8WB9/image.png" alt="Me" />
    </div>
  </div>;
};

export default App;
