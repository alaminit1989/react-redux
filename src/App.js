import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './store'
import Count from './components/Count'
import Control from './components/Control'

class App extends Component {  
  render() {

    return (
      <Provider store={ store }>
        <div className="App">          
          <h1>Simple Project: Number Increase & Decrease Button Click Event</h1>
          <div class="container">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div style={{backgroundColor: 'LightSeaGreen', width: '220px', margin: '0 auto'}}><Count /></div>
                <div><Control /></div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );

  }
}

export default App;



// A reducer funtion must have two parameters
    // State, Action
    // const reducer = (state= {}, action) => {

    //   if(action.type === 'a'){
    //     return {
    //       ...state,
    //       a: 'I am new state'
    //     }
    //   }
    //   else if(action.type === 'b') {
    //     return {
    //       ...state,
    //       b: 'I am z'
    //     }
    //   }
    //   return state
    // }

    // const store = createStore(reducer)

    // store.subscribe(() => {
    //   console.log(store.getState().b)
    // })

    // store.subscribe(() => {
    //   console.log(store.getState().a)
    // })

    // store.dispatch({type: 'b'})
    // store.dispatch({type: 'e'})
    // store.dispatch({type: 'a'})
    // store.dispatch({type: 's'})