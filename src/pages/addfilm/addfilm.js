import './style.css'
import {Link, useLocation} from "react-router-dom";

const AddFilm = ()=>{
    const location = useLocation();
    const film = location.state ? location.state.params : '';
return (
    <div>
        <h1>Details Film </h1>
        <h3>Title : {film.title}</h3>
        <h3>Type : {film.type}</h3>
        <h3>Desctiption : {film.description}</h3>
        <br/>
        <Link to={'/listfilms'}>Go To List Films</Link>
    </div>
)
}
export default AddFilm;
