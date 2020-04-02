import React from 'react';
import './styles/App.css';
import './styles/blog.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MasterComponent from './Components/mastercomponent'
import HeaderComponent from './Components/headercomponent'
import FooterComponent from './Components/footerComponent'


function App() {

  return (
    <Router basename="/Blog-app">
      <Route path="/">
        <HeaderComponent />
        <MasterComponent />
        <FooterComponent />
      </Route>
    </Router>
  )
}

export default App;
