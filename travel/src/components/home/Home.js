import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import '../../components/home/Home.css';


const TrvlData = require('../../data/db.json');
function Home(props){

    return (

        <div className="home">
          <Header/>
          <Tours data={TrvlData} /> 
        
          <Footer/>
        </div>
    
    );

}
export default Home;