import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './components/column';
import { addText, editText, deleteText, deleteInput } from './actions/inputActions';

import './App.css';

const columns = [ 'PROS', 'CONS' ];

const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    store: state.inputReducer
  }
}

const mapDespatchToProps = dispatch => {
  return {
    addText: (textType, text) => {
      dispatch(addText(textType, text))
    },
    editText: (textType, text) => {
      dispatch(addText(textType, text))
    },
    deleteText: (textType, text) => {
      dispatch(addText(textType, text))
    },
    deleteInput: (textType, text) => {
      dispatch(addText(textType, text))
    }
  }
}

class App extends Component {
  render() {
    console.log(this.props)
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
                index={index}
                name={column}
                {...this.props}
              />
          )})
            
            
          }
         </div> 
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDespatchToProps)(App);

export default AppContainer;


