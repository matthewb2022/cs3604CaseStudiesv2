import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollectionsPage from './pages/CollectionsPage';
import ItemsPage from './pages/ItemsPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div id="content-wrapper" class="container" role="main">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} />
              <Route path="/collections" component={CollectionsPage} />
              <Route path="/items" component={ItemsPage} />
            </Switch>
        </div>
        </div>
      </Router>
    )
  }
}

export default App;