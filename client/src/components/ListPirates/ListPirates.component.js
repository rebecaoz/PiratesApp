import React from 'react';
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios"


const ListPirates = (props) =>{
    const navigate = useNavigate();
    
    
    //console.log(props)

    
    const remove = (e) =>{
        axios.delete(`http://localhost:8000/api/pirate/delete/${e.target.value}/`)
      
        .then(alert("Man in the water! Bye Bye!"))
        
        .catch( err => console.log(err));
    } 

   
    return(
        <div>
        {props.pirates.map((pirate, index) => {
            return <div key={pirate._id} className='container text-center'>
                <div className='row d-flex align-items-center'>
                    <div className='col'>{pirate.imageUrl}</div>
                    <div className='col'>
                        <p className="title">{pirate.name}</p>
                        
                        <div className="">
                            <Button className="btn me-2" onClick={()=>{navigate("/pirate/"+pirate._id)}}>View Pirate</Button>
                            <Button className="btn" value={pirate._id} onClick={remove}>Walk the Plank</Button>
                        </div>
                    </div>
                </div>   
            </div>    
        })}
        </div>  
    )
}
export default ListPirates    