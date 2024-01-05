import React from 'react';
import "./components/App.css";
import Navbar from './components/navbar';
import { Row } from './components/row';
import Banner from './components/Banner';
import requests from './request';


function App() {
  return(
  <>
    <div className='app'>
    <Navbar/>
    <Banner/>
    <Row isLargeRow={true}/>

    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals }/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
  
    </div>
  </>
  );
}

export default App;
