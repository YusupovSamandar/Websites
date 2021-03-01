import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../public/js/jquery.min.js';
// import '../public/js/popper.min.js';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import 'jquery-migrate/dist/jquery-migrate';
// import 'jquery-waypoints/waypoints';
// import 'jquery.stellar/jquery.stellar';
// import 'scrollax/scrollax';
// import 'popper.js';
// import 'bootstrap/dist/js/bootstrap';
// import 'mdbreact/dist/mdbreact';
// import 'owl.carousel/dist/owl.carousel';
// import '../public/js/slick.min.js'
// import '../public/js/popular';
// import '../public/js/main';
// import '../public/js/news';
// import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
