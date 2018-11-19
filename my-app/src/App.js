import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Serra Park</h1>
        </header>
        <div className = "About">
          <h2>About</h2>
          <hr></hr>
        </div>
        <div className = "Experience">
          <h2>Education</h2>
            <div className = "edu row">
              <div className = "col-md-4">
                <h4>University of California, Berkeley</h4>
              </div>
              <div className = "col-md-8">
                <h6>Pursuing B.A. in Computer Science</h6>
                <h6>Major GPA: </h6>
              </div>
            </div>
          <hr></hr>
          <h2>Experience</h2>
            <div className = "work row">
              <div className = "col-md-4">
                <h4></h4>
              </div>
              <div className = "col-md-8"> </div>
            </div>
            <div className = "work row">

            </div>
          <hr></hr>
        </div>
        <div classNAme = "Projects">
        </div>
        <div className = "Contact">
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
