// Load up the React libraries. We need both of these
import React from 'react';
import ReactDOM from 'react-dom';
// Import all of your .cs files here
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Load all components and libraries for our app.
import App from './App';
import * as model from './Model';

model.createStudent("Denzel", "Washington", true, 11223344, "black", 23, true);
model.createStudent("Tom", "Cruise", true, 88226644, "caucasian", 32, false);
model.createStudent("Jackie", "Chan", true, 33661199, "asian", 34, false);
model.createStudent("Jennifer", "Lopez", false, 99110099, "hispanic", 32, true);


// Tell React where to place our app on the page.
ReactDOM.render(<App />, document.getElementById('root'));
