//import "./MainPage.style.css"
import ListPirates from "../../components/ListPirates/ListPirates.component";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
//import HTTPClient from "../../utils/HTTPClient";

const MainPage = (props) => {

    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();
   
    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirates')
            .then((response) => {
                setPirates(response.data.pirates)
                //console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },)

   

    const Ir = () =>{
        navigate("/new");
    }

    return <div className="content">
        
        <div className="d-flex d-flex justify-content-evenly m-4">
            <h1 className="">Pirates Crew</h1>
            <Button variant="primary" onClick={Ir}>Add Pirate</Button>
        </div>
        
        <div>
            <ListPirates pirates={pirates} />
        </div>
    </div>
}

export default MainPage;