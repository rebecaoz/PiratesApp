import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';

const Details = () =>{
    
    const params = useParams();
    const [result, setResult] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirate/${params.id}/`)
             
             .then( response => setResult(response.data.result) )
             .catch( err => console.log(err));
    },[params.id])
    
    const handleClick = (event) => {
        
        setResult({
            ...result,
            [event.target.name]: event.target.value
        })
        
        editPirate(result)
    }
  
    const editPirate = (data) => {
        
        axios.put(`http://localhost:8000/api/pirate/${params.id}`,data)
            .then((response) => { 
                //console.log(response)  
            })
            .catch((error) => {
                console.log(error)
            },[params.id])
        
    }

    editPirate(result)
    return (
        <div>
            <div>
                <h2>{result.name}</h2>
            </div>
            <div>
                <div>
                    <img src="" alt={result.imageUrl}/>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Position: {result.crewPosition}</p>
                    <p>Treasures: {result.numOfTreasures}</p>
                    <div>
                        <p>Peg Leg: {result.pegLeg ? "yes":"no"} </p>
                        {
                            <Button onClick={handleClick} name="pegLeg" value={!result.pegLeg}>{result.pegLeg? "NO":"YES"}</Button>
                        }
                    </div>
                    <div>
                        <p>Eye Patch: {result.eyePatch? "yes":"no"}</p>
                        {
                            <Button onClick={handleClick} name="eyePatch" value={!result.eyePatch}>{result.eyePatch? "NO":"YES"}</Button>
                        }
                    </div>
                    <div>
                        <p>Hook Hand: {result.hookHand? "yes":"no"}</p>
                        {
                            <Button onClick={handleClick} name="hookHand" value={!result.hookHand}>{result.hookHand? "NO":"YES"}</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details