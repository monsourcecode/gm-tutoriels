import './listtask.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import Task from "../task/task";

const list = [
    {
        id:'2131132',
        description:'uitjhghj',
        isDone:'true',
        date:'06-02-2012',
        status:'DONE'
    },
    {
        id:'2131132',
        description:'uitjhghj',
        isDone:'true',
        date:'06-02-2012',
        status:'DONE'
    },
    {
        id:'2131132',
        description:'uitjhghj',
        isDone:'true',
        date:'06-02-2012',
        status:'DONE'
    }
]
const ListTask = ()=>{
    const [tasks, setTasks] = useState(list)
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


