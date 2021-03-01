/* eslint-disable */
import React from 'react';
import Header from './container/Header/Header';
import './App.css';
import Carousel from './container/Carousel/Carousel';
import News from './container/news/news.jsx';
import Popular from './container/Popular/Popular';
import Footer from './container/Popular/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <News />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
