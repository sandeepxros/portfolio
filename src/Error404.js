import img from "./Asset/images/error.jpg"
import { Link } from "react-router-dom";
export default function Error(){
    return(
        <>
        <img src={img} className="img-fluid"/>
        <Link to='/'>Back to Home</Link>
        </>
    )
}