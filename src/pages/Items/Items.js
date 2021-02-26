import './style.css'
import {Button, Card, Grid, TextField} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {useEffect, useState} from "react";
import API from "../../api/api";

const Items = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [name, setName] = useState('')
    const [items, setItems] = useState([])
    useEffect(() => {
        API.get('/items').then(res => {
            console.log(res.data)
            setItems(res.data)
        })
            .catch(err => console.log(err))
    }, [])
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const send = () => {
        const data = {
            name: name,
            date: selectedDate.getTime() + ''
        }
        console.log(data)
        API.post('/additem', data)
            .then(res => {
                alert('OK')
            })
            .catch(eer => {
                alert('Not ok')
            })
    }
    return (
        <div className={'item-main'}>
            <Card className={'item-card'}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <TextField
                    value={name}
                    onChange={event => setName(event.target.value)}
                    label="Name"/>
                <Button onClick={send} style={{marginTop: 10}} variant="contained" color="primary">
                    Send
                </Button>
            </Card>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                {items && items.map(item => (
                    <div>
                        <h3>{item.name}</h3>
                        <h3>{(new Date(Number(item.date))).toLocaleDateString()}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Items
