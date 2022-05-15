import '../tours/Tours.css';
import {Link} from "react-router-dom";
import Header from '../header/Header';

function Tours(props){

    return <>{
            props.data.map(tour => {
                return (
                    
                    <Link to={`/tour/${tour.id}`}>
                    <div key={tour.id}>
                        <h2>{tour.name}</h2>
                        <img src={tour.image} alt={tour.name} />
                    </div>
                    </Link>
                )
            })
        }
        </>
    

}
export default Tours;