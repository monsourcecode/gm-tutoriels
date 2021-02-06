import './addtask.css'
import {Link} from "react-router-dom";
import {Button, Card, Checkbox, FormControlLabel, MenuItem, Select, TextField} from "@material-ui/core";
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
                    <TextField style={{width:'100%'}}  label="Id" />
                    <TextField style={{width:'100%'}}  label="Description" />
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
                    />
                    <Select
                        value={'TODO'}
                        onChange={handleChange}>
                        <MenuItem value={'TODO'}>TODO</MenuItem>
                        <MenuItem value={'DOING'}>DOING</MenuItem>
                        <MenuItem value={'DONE'}>DONE</MenuItem>
                    </Select>
                    <Button style={{width:'30%',
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
