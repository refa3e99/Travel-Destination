import { Link } from "react-router-dom";
import '../header/Header.css';
import Navbar from "../Navbar/Navbar";
function Header(props){

    return (

        <div className="header">
            <h1>welcome</h1>
            <Navbar/>
        </div>
    
    );

}
export default Header;