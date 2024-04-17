import React from 'react';
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ListPirates = (props) =>{
    const navigate = useNavigate();
    
    return(
        <div>
        {props.pirates.map((pirate, index) => {
            return <div key={pirate._id}>
                <div className="">
                    <p className="title">{pirate.name}</p>
                    <div>{pirate.imageUrl}</div>
                    <div className="btn-group">
                        <Button className="btn" onClick={()=>{navigate("/pirate/"+pirate._id)}}>View Pirate</Button>
                        <Button className="btn">Walk the Plank</Button>
                    </div>
                </div>
            </div>    
        })}
        </div>  
    )
}
export default ListPirates    