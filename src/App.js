import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
////import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  //Issue with firebase 5.0.6 even though I have 5.2.0
  //Fix: npm install --save firebase@5.0.4 or use below
  initializeFirebase() {
    const firebase = require("firebase");
  
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAJL8-xXv5EIYF2A_UBRVWEDdMlVnKnKxQ",
      authDomain: "manager-e55de.firebaseapp.com",
      databaseURL: "https://manager-e55de.firebaseio.com",
      projectId: "manager-e55de",
      storageBucket: "manager-e55de.appspot.com",
      messagingSenderId: "81414242422"
    };
    firebase.initializeApp(config);
  
    //init firestore from firebase
    const firestore = require("firebase/firestore");
    db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
  }
  
  componentWillMount() {
    this.initializeFirebase();
  }


  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      // give the provider a redux store
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;