import './task.css'
import {Card} from "@material-ui/core";

const Task = (props)=>{
    return(
        <Card className={'tast-card'}>
            <h3>Id : {props.id}</h3>
            <h3>Description : {props.description}</h3>
            <h3>Is Done : {props.isDone}</h3>
            <h3>Date Creation : {props.date}</h3>
            <h3>Status : {props.status}</h3>
        </Card>
    )
}
export default Task;
