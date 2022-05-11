function Tours(props){

    return (

        <div className="tours">
            <img src={props.image} alt={props.name}/> 
            <p> {props.name}</p>
            <hr></hr>
        </div>
    
    )

}
export default Tours;