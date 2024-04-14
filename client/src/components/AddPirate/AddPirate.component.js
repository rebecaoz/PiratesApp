import axios from "axios"
import { useState } from "react"
import { useNavigate} from "react-router-dom";

const AddPirate = () =>{
    const [data, setData] = useState({})
    const navigate = useNavigate();
    

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const createPirate = (data) => {
        
        axios.post('http://localhost:8000/api/pirate/new',data )
            .then((response) => {
                //console.log(data)
                //console.log(response.data)
                //getPets();
                //setPets(response.data);  
            })
            .catch((error) => {
                console.log(error)
            })
        
    }

    const handleCheckbox = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.checked
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createPirate(data)
        //console.log(data);
        setData({})
    }

    
    return <div>
        <div>
            <h2 className="text-center">Add Pirate</h2>
            <button onClick={()=>navigate(-1)}>Crew Board</button>
        </div>
        <div className="pd-5">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <span>Pirate Name:</span>
                    <input
                        className="ml-2" 
                        type="text" 
                        name="name" 
                        value={data.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <span>Image Url:</span>
                    <input
                        className="ml-2" 
                        type="text" 
                        name="imageUrl" 
                        value={data.imageUrl} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <span>Number of Treasures:</span>
                    <input
                        className="ml-2" 
                        type="number" 
                        name="numOfTreasures" 
                        value={data.numOfTreasures} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <span>Pirate Catch Phrase:</span>
                    <input
                        className="ml-2" 
                        type="text" 
                        name="catchPhrase" 
                        value={data.catchPhrase} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <span>Crew Position:</span>
                    <select className="ml-2" 
                        type="text" 
                        name="crewPosition" 
                        value={data.crewPosition} 
                        onChange={handleChange} 
                    >
                        <option>Captain</option>
                        <option>First Mate</option>
                        <option>Quarter Master</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input name="pegLeg" className="ml-2" onChange={handleCheckbox} type="checkbox" id="cbox1" />
                        <label htmlFor="cbox1">Peg Leg</label>
                    </div>
                    <div>
                        <input className="ml-2" name="eyePatch" onChange={handleCheckbox} type="checkbox" id="cbox2" />
                        <label htmlFor="cbox2">Eye Patch</label>
                    </div>
                    <div>
                        <input className="ml-2" name="hookHand" onChange={handleCheckbox} type="checkbox" id="cbox3" />
                        <label htmlFor="cbox3">Hook Hand</label>
                    </div>
                    
                </div>
                <div>
                    <button type="submit">Add Pirate</button>
                </div>
            </form>
        </div>
    </div>
}
export default AddPirate