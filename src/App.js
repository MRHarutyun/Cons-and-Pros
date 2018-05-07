import React, { Component } from 'react';
import Column from './components/column';

import './App.css';

const columns = [ 'PROS', 'CONS' ];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="list-title">Should i eat at McDonalds ?</h1>
        </header>
        <div className="Pros-Cons">
          <section id="first-column"><h2>Pros</h2></section>
          <section><h2>Cons</h2></section>
        </div>
        <div className="column-container">
          { columns.map((column,  index) => {
            return (
              <Column
                key={index}
                type={column}
              />
          )})
          }
         </div>
      </div>
    );
  }
}
