import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios"


const ListPirates = (props) =>{
    const navigate = useNavigate();
    
    const [result, setResult] = useState([]);
    //console.log(props)

    
    const remove = (e) =>{
        axios.delete(`http://localhost:8000/api/pirate/delete/${e.target.value}/`)
        .then( response => setResult(response.data.result) )
        .then(alert("Man in the water! Bye Bye!"))
        
        .catch( err => console.log(err));
    } 

   
    return(
        <div>
        {props.pirates.map((pirate, index) => {
            return <div key={pirate._id}>
                <div className="">
                    <p className="title">{pirate.name}</p>
                    <div>{pirate.imageUrl}</div>
                    <div className="">
                        <Button className="btn me-2" onClick={()=>{navigate("/pirate/"+pirate._id)}}>View Pirate</Button>
                        <Button className="btn" value={pirate._id} onClick={remove}>Walk the Plank</Button>
                    </div>
                </div>
            </div>    
        })}
        </div>  
    )
}
export default ListPirates    