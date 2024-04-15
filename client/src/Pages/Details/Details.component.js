import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

const Details = () =>{
    
    const params = useParams();
    //console.log(params);
    const [result, setResult] = useState([]);
    //console.log(result.pegLeg)
    //const [pegLeg, setPegLeg] = useState();
    //const [hookHand, setHookHand] = useState(result.hookHand);
    //const [eyePatch, setEyePatch] = useState();
    //console.log(pegLeg)
    
    
    
    
    /*
    const remove = () =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${params.id}/`)
        .then( response => setResult(response.data.result) )
        .then(alert("Congratulatios. You got a pet"))
        .then(navigate("/"))
        .catch( err => console.log(err));
    }*/
    
   
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
                <h2>Deep Sea Davy</h2>
            </div>
            <div>
                <div>
                    <img src="" alt={result.imageUrl}/>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Position: {result.crewPosition}</p>
                    <p>Treasures: {result.numOfTreasures}</p>
                    <p>Peg Leg: {result.pegLeg ? "yes":"no"} </p>
                    {
                        <button onClick={handleClick} name="pegLeg" value={!result.pegLeg}>{result.pegLeg? "NO":"YES"}</button>
                    }
                    <p>Eye Patch: {result.eyePatch? "yes":"no"}</p>
                    {
                        <button onClick={handleClick} name="eyePatch" value={!result.eyePatch}>{result.eyePatch? "NO":"YES"}</button>
                    }
                    <p>Hook Hand: {result.hookHand? "yes":"no"}</p>
                    {
                        <button onClick={handleClick} name="hookHand" value={!result.hookHand}>{result.hookHand? "NO":"YES"}</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Details