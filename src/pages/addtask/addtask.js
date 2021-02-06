import './addtask.css'
import {Link, useHistory} from "react-router-dom";
import {Button, Card, Checkbox, FormControlLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pushTask} from "../../store/store";

const AddTask = ()=>{
    const [id,setId] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [status,setStatus] = useState('')
    const [checked, setChecked] = useState(false);
    let history = useHistory();
    const tasks = useSelector((state)=>state.list.tasks)
    const dispatch = useDispatch();
    const addTask = useCallback((list) =>
        dispatch(pushTask(list)), [dispatch]);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const add = ()=>{
        const task = {
            id,
            description,
            date,
            status,
            isDone:checked
        }
        let newList = [...tasks]
        newList.push(task)
        addTask(newList);
        setStatus('')
        setDate('')
        setId('')
        setChecked(false)
        history.push('/listtasks')
    }
    return(
        <div className={'add-task-container'}>
            <h1>Add task</h1>
            <Card className={'card-add-style'}>
                <div className={'sous-card'}>
                    <TextField
                        value={id}
                        onChange={event => setId(event.target.value)}
                        style={{width:'100%'}}  label="Id" />
                    <TextField
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        style={{width:'100%'}}  label="Description" />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Is Done"
                    />
                    <TextField
                        label="Date Création"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date}
                        onChange={event => setDate(event.target.value)}
                    />
                    <Select
                        value={status}
                        onChange={event => setStatus(event.target.value)}>
                        <MenuItem value={'TODO'}>TODO</MenuItem>
                        <MenuItem value={'DOING'}>DOING</MenuItem>
                        <MenuItem value={'DONE'}>DONE</MenuItem>
                    </Select>
                    <Button onClick={add} style={{width:'30%',
                        alignSelf:'center', marginTop:10}}
                            variant="contained"
                            color="primary">
                        Envoyer
                    </Button>
                </div>
            </Card>
            <Link to={'listtasks'}>Go To List Tasks</Link>
        </div>
    )
}
export default AddTask;
