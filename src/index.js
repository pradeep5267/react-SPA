import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectComponent from './components/ProjectComponent';
import IntroComponent from './components/IntroComponent'
import SocialComponent from './components/SocialFooterComponent'

ReactDOM.render(
  <div>
    <hr></hr>
    <IntroComponent/>

    <hr></hr>
    <ProjectComponent />

    <hr></hr>
    <footer>
    <p>
      bottom text here 
    </p>
    <SocialComponent/>
    </footer>

  </div>,
  document.getElementById('root')
);
