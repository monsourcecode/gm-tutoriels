import './style.css'
import {Link, useHistory} from "react-router-dom";

const list = [
    {
        title: 'Title 1',
        type: 'Type  1 ',
        description: 'description 01'
    },
    {
        title: 'Title 2',
        type: 'Type  3 ',
        description: 'description 02'
    },
]
const ListFilms = ()=>{
    const history = useHistory();
    const navigate =(data) => {
        history.push('/addfilm', {params: data})
    }
    return(
        <div style={{width:'100%',
            height:'100vh',display:"flex",
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'}}>

            <h1>List Films</h1>

            { list && list.map( film=>
                <div onClick={() => navigate(film)} style={{width:200,
                    height:100,display:"flex",
                    justifyContent:'center',
                    flexDirection:'column',
                    marginTop:10,
                    backgroundColor:'red',
                     alignItems:'center'}}>
                    <h3>Titre : {film.title} </h3>
                    <h3>Type : {film.type} </h3>
                </div>
            )}
            <br/>
            <Link to={'/addfilm'}>Go To Add Film</Link>
        </div>
    )
}
export default ListFilms;
