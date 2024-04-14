import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

const Details = () =>{
    
    const params = useParams();
    //console.log(params);
    const [result, setResult] = useState([]);
    console.log(result.pegLeg)
    //const [pegLeg, setPegLeg] = useState();
   // const [hookHand, setHookHand] = useState();
    //const [eyePatch, setEyePatch] = useState();
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirate/${params.id}/`)
            //.then(response=>console.log(response))
             .then( response => setResult(response.data.result) )
             .catch( err => console.log(err));
    },[params.id])
    
    /*
    const remove = () =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${params.id}/`)
        .then( response => setResult(response.data.result) )
        .then(alert("Congratulatios. You got a pet"))
        .then(navigate("/"))
        .catch( err => console.log(err));
    }*/
    /*
    const handleChange = (event) => {
        //console.log(data);
        if(pegLeg){
            setPegLeg(false)
        }else{
            setPegLeg(true)
        }
    }*/

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
                    <p>Peg Leg: {String(result.pegLeg)} </p>
                   
                    <p>Eye Patch:</p>
                    {
                        result.eyePatch ? <button>YES</button>:<button>NO</button>
                    }
                    <p>Hook Hand:</p>
                    {
                        result.hookHand ? <button>YES</button>:<button>NO</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Details