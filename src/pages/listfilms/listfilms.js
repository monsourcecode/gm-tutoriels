import './style.css'
import {Link} from "react-router-dom";


const ListFilms = ()=>{
    return(
        <div>
            <h1>List Films</h1>
            <br/>
            <Link to={'/addfilm'}>Go To Add Film</Link>
        </div>
    )
}
export default ListFilms;
