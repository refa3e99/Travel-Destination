import { Link } from "react-router-dom";
import '../header/Header.css';
function Header(props){

    return (

        <div className="header">
            <Link to = "/">Home</Link>
        </div>
    
    );

}
export default Header;