import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login'; // Ensure correct import path and case

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>App Main Page</h1>
          {/* Link to navigate to the login page */}
          <Link to="/login">Go to Login Page</Link>

          {/* Define a route for the Login component */}
          <Route path="/login" component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;
