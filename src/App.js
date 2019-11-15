import React from 'react';

//add router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import NoMatch from './NoMatch'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'
import Jumbotron from './components/Jumbotron'

function App() {
  return (
    <React.Fragment>
       <NavigationBar />
       <Jumbotron />
       <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>

    </React.Fragment>
  );
}

export default App;
