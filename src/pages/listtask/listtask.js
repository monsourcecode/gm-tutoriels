import './listtask.css'
import {Link} from "react-router-dom";

const ListTask = ()=>{
    return(
        <div>
            <h1>List Task</h1>
            <Link to={'addtask'}>Go To Add Task</Link>
        </div>
    )
}

export default ListTask;


