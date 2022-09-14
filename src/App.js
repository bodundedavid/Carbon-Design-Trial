import './app.scss';
import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import { Route, Routes } from 'react-router-dom'
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

function App() {
  return (
    <>  
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        
        <Content>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/repos" element={<RepoPage />} />
          </Routes>
        </Content>
    </>
  );
}

export default App;
