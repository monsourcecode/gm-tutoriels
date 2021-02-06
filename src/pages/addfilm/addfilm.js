import './style.css'
import {Link} from "react-router-dom";

const AddFilm = ()=>{
return (
    <div>
        <h1>Add Film </h1>
        <br/>
        <Link to={'/listfilms'}>Go To List Films</Link>
    </div>
)
}
export default AddFilm;
