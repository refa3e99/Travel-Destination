import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar(props){

    return (

        <div className="navbar">
            <Link to = "/">Home</Link>
        </div>
    
    );

}
export default Navbar;