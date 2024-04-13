import React from 'react';



const ListPirates = (props) =>{
    
    return(
        <div>
        {props.pirates.map((pirate, index) => {
            return <div key={pirate._id}>
                <div className="">
                    <p className="title">{pirate.name}</p>
                    <div>{pirate.imageUrl}</div>
                    <div className="btn-group">
                        <button className="btn">View Pirate</button>
                        <button className="btn">Walk the Plank</button>
                    </div>
                </div>
            </div>    
        })}
        </div>  
    )
}
export default ListPirates    