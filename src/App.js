import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
////import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  //Issue with firebase 5.0.6 even though I have 5.2.0
  //Fix: npm install --save firebase@5.0.4 or use below
  initializeFirebase() {
    const firebase = require("firebase");
  
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCi6alTaei6Kotq5OVamVCDXdDZucM7gMU",
      authDomain: "striking-splice-95612.firebaseapp.com",
      databaseURL: "https://striking-splice-95612.firebaseio.com",
      projectId: "striking-splice-95612",
      storageBucket: "striking-splice-95612.appspot.com",
      messagingSenderId: "84783460687"
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
    return (
      // give the provider a redux store
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;