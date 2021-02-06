import './addtask.css'
import {Link} from "react-router-dom";
import {Card, Checkbox, FormControlLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useState} from "react";

const AddTask = ()=>{
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <div className={'add-task-container'}>
            <h1>Add task</h1>
            <Card className={'card-add-style'}>
                <div className={'sous-card'}>
                    <TextField style={{width:'60%'}}  label="Id" />
                    <TextField style={{width:'60%'}}  label="Description" />
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
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Select
                        value={'TODO'}
                        onChange={handleChange}>
                        <MenuItem value={'TODO'}>TODO</MenuItem>
                        <MenuItem value={'DOING'}>DOING</MenuItem>
                        <MenuItem value={'DONE'}>DONE</MenuItem>
                    </Select>
                </div>
            </Card>
            <Link to={'listtasks'}>Go To List Tasks</Link>
        </div>
    )
}
export default AddTask;
