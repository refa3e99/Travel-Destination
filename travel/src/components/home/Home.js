import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

import '../../components/home/Home.css'

const TrvlData = require('../../data/db.json');
function Home(props){

    return (

        <div className="home">
           <Header/>
           
           {
      TrvlData.map(tours => {
        return (
          <Tours 

            name = {tours.name}
            image = {tours.image}
            info = {tours.info} 
          
          />
        )
      })
     
     }
        <Footer/>
        </div>
    
    );

}
export default Home;