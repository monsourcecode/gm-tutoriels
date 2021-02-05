import {Card} from "@material-ui/core";

import './style.css'

const MovieCard = (props)=>{
    return(
        <Card style={{backgroundColor:'#4e95b5'}}  className={'card-style'}>
            <h3>Film title : {props.title}</h3>
            <h3>Film description : {props.description} </h3>
            <h3>Film rate : {props.rate} </h3>
            <h3>Film url : {props.url}</h3>
        </Card>
    )
}
export default MovieCard;
