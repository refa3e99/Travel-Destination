import '../tours/Tours.css';
function Tours(props){


    return (

        <div>
            <img src={props.image} alt={props.name}/> 
            <p> {props.name}</p>
            <hr></hr>
        </div>
    
    )

}
export default Tours;