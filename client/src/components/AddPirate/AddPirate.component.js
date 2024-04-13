import axios from "axios"
import { useState } from "react"

const AddPirate = () =>{
    const [data, setData] = useState({})
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [numOfTreasures, setNumOfTreasures] = ("")
    const [catchPhrase, setCathPhrase] = ("")
    const [crewPosition, setCrewPostion] = ("")
    const [pegLeg, setPegLeg] = (false)
    const [eyePatch, setEyePatch] = (false)
    const [hookHand, setHookHand] = (false)
    

    const handleChange = (event) => {
        /*
        setData({
            ...data,
            [event.target.name]: event.target.value
        })*/
        setName({[event.target.name]: event.target.value})
        setImageUrl({[event.target.name]: event.target.value})
        setNumOfTreasures({[event.target.name]: event.target.value})
        setCathPhrase({[event.target.name]: event.target.value})
        setCrewPostion({[event.target.name]: event.target.value})
        setPegLeg({[event.target.name]: event.target.checked})
        setEyePatch({[event.target.name]: event.target.checked})
        setHookHand({[event.target.name]: event.target.checked})
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

    const handleSubmit = (event) => {
        event.preventDefault();
        createPirate(data)
        //console.log(data);
        setData({})
    }

    


    return <div>
        <div>
            <h2 className="text-center">Know a pet needing a home</h2>
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
                        <input name="pegLeg" className="ml-2" onChange={handleChange} type="checkbox" id="cbox1" />
                        <label htmlFor="cbox1">Peg Leg</label>
                    </div>
                    <div>
                        <input className="ml-2" name="eyePatch" onChange={handleChange} type="checkbox" id="cbox2" />
                        <label htmlFor="cbox2">Eye Patch</label>
                    </div>
                    <div>
                        <input className="ml-2" name="hookHand" onChange={handleChange} type="checkbox" id="cbox3" />
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