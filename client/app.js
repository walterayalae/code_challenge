import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Plugin required to make some material-UI components work
injectTapEventPlugin();

//Main.js is our main component that is rendered to the DOM
ReactDOM.render(< Main />, document.getElementById('app'));