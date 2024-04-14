import React from 'react';
import { useNavigate} from "react-router-dom";

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
                        <button className="btn" onClick={()=>{navigate("/pirate/"+pirate._id)}}>View Pirate</button>
                        <button className="btn">Walk the Plank</button>
                    </div>
                </div>
            </div>    
        })}
        </div>  
    )
}
export default ListPirates    