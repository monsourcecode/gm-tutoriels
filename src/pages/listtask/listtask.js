import './listtask.css'
import {Link} from "react-router-dom";
import Task from "../task/task";
import {useSelector} from "react-redux";

const ListTask = ()=>{
    const tasks = useSelector((state)=>state.list.tasks)
    return(
        <div className={'main'}>
            <h1>List Tasks</h1>
            <div className={'list-container'}>
                {tasks && tasks.map( task =>(
                    <Task
                        id={task.id}
                        description={task.description}
                        isDone={task.isDone}
                        date={task.date}
                        status={task.status}
                    />
                ))}
            </div>
            <Link to={'addtask'}>Go To Add Task</Link>
        </div>
    )
}

export default ListTask;


