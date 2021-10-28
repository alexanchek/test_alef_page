import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import FormPage from './components/Pages/FormPage/FormPage'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Preview from './components/Pages/Preview/Preview';

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <Header />

            <Route component={ FormPage } exact path="/form" />
            <Route component={ Preview } exact path="/preview" />
            
            <Footer/>
          </div>

        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
