/**
 * Application bootstrap module
 *
 */

//Note. In order for jQuery to be scoped correctly it needs to be attached to the window object
window.jQuery = window.$ = require('jquery/dist/jquery.min')


/** All the usual imports */
import bootstrap from 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapmaterial from 'bootstrap-material-design/dist/js/bootstrap-material-design';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from '../redux/stores/configureStore';
import App from './App'

//Styling and Themes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  version,
} from '../../../package.json'



//Customize the console log 
//
//Also available is   console.table   console.trace
console.todo = function(msg) {
    console.log('%c %s %s %s', 'color: yellow; background - color: black;', '–', msg, '–');
}

console.important = function(msg) {
    console.log(' %c %s %s %s', 'color: brown; font - weight: bold; text - decoration: underline;', '–', msg, '-');
}
console.todo('Testing a todo')
console.important('Testing important')
console.log("%cHi from dnldr", "font-size: 100px;" )

Object.defineProperty(window, "console", {
    value: console,
    writable: false,
    configurable: false
});

var i = 0;
function showWarningAndThrow() {
    if (!i) {
        setTimeout(function () {
            console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
        }, 1);
        i = 1;
    }
    throw "Console is disabled";
}

var l, n = {
        set: function (o) {
            l = o;
        },
        get: function () {
            showWarningAndThrow();
            return l;
        }
    };
Object.defineProperty(console, "_commandLineAPI", n);
Object.defineProperty(console, "__commandLineAPI", n);

console.log('testing')

//Create store and render app on react element
const rootEl = document.getElementById('react-root')
const store = configureStore()
render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
)




// Extra sample code for future reference

// let render = () => {
//   const Root = require('./App').default
//   ReactDOM.render(<Root />, rootEl)
// }
// render()

// Method A
// module.exports = function render(locals, callback) {
//   var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Main, locals))
//   console.log('html: ',html)
//   callback(null, '<!DOCTYPE html>' + html)
// }

//Method B
//ReactDOM.render(<Main />, document.getElementById('react-root'));



// console.log('jquery: ',$)
// console.log('bootstrap: ',bootstrap)


// let body = `
//    <!-- Used to add drop shadow effect on elements -->
//     <svg height="0" xmlns="http://www.w3.org/2000/svg">
//         <filter id="drop-shadow">
//             <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
//             <feOffset dx="12" dy="12" result="offsetblur" />
//             <feFlood flood-color="rgba(0,0,0,0.5)" />
//             <feComposite in2="offsetblur" operator="in" />
//             <feMerge>
//                 <feMergeNode/>
//                 <feMergeNode in="SourceGraphic" />
//             </feMerge>
//         </filter>
//     </svg>

//     <script src="https://www.gstatic.com/firebasejs/4.5.0/firebase.js"></script>
//     <script>
//       // Initialize Firebase
//       var config = {
//         apiKey: "AIzaSyDlNtbba130XTvDuvwQwsgaEgzccURYrXk",
//         authDomain: "floorball-46825.firebaseapp.com",
//         databaseURL: "https://floorball-46825.firebaseio.com",
//         projectId: "floorball-46825",
//         storageBucket: "floorball-46825.appspot.com",
//         messagingSenderId: "181485017680"
//       };
//       firebase.initializeApp(config);
//     </script>
     
// `

//document.write(body)



