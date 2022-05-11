import logo from './logo.svg';
import './App.css';

import Footer from './footer/Footer';
import './footer/Footer.css';

import Header from './header/Header';
import './header/Header.css';

import Home from './home/Home';
import './home/Home.css';

import Tours from './tours/Tours';
import './tours/Tours.css';

const TrvlData = require('./data/db.json');

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     

     {
      TrvlData.map(tours => {
        return (
          <Tours 

            name = {tours.name}
            image = {tours.image} 
          
          />
        )
      })
     
     }

     <Footer/>

    </div>
  );
} 

export default App;
