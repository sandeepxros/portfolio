import img from "./Asset/error.jpg"
import { Link } from "react-router-dom";
export default function Error404(){
    return(
        <>
        <img src={img} alt="error" className="img-fluid"/>
        <Link to='/'>Back to Home</Link>
        </>
    )
}