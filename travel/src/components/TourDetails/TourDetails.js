import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../TourDetails/TourDetails.css";
let data = require("../../data/db.json");
export default function TourDetails() {
    let {id} = useParams();

    let result = data.filter(data=>data.id===id);
    let info =  result[0].info;
    const [isReadMoreShown , setReadMoreShown] =
    useState(false);

    const toggleButton = () => {
        setReadMoreShown(prevState => !prevState);

    }

    return (
    <>
        <Navbar/>
        <div key={result[0].id} >
            
            <img src={result[0].image} alt={result[0].name}/>
            <ul>
                <li><h3>Name : {result[0].name}</h3></li>
                <li>Info : {isReadMoreShown ? info : info.substring(0,100) }</li>
                
            </ul>
            <button onClick={toggleButton}> {isReadMoreShown ? 'Read Less' : '...Read More' } </button>

        </div>
    </>
)}