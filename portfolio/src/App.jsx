import React from 'react'
import profilepic from './assets/SR-Profile Picture.jpeg'
import './App.css'

function App({bio}) {

  return (
    <>
          <div class="portfolio-container">
      <div class="left-section">
          <h1> Smeet Rathod </h1>
          <p>{bio}</p>
      </div>
      <div class="right-section">
          <img src={profilepic} alt="profile" />
      </div>
    </div>
    </>
  )
}

export default App
