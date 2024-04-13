import "./MainPage.style.css"
import ListPirates from "../../components/ListPirates/ListPirates.component";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
//import HTTPClient from "../../utils/HTTPClient";

const MainPage = (props) => {

    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();
   
    

    const getPirates = () => {
        axios.get('http://localhost:8000/api/pirates')
            .then((response) => {
                setPirates(response.data.pirates)
                
                //console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    

    useEffect(()=>{
        getPirates();
        
    },[])


    return <div className="content">
        
        <div>
            <h1>Pirates Crew</h1>
            <button onClick={navigate("/new")}>Add a Pirate</button>
        </div>
        
        <div>
            <ListPirates pirates={pirates} />
        </div>
    </div>
}

export default MainPage;