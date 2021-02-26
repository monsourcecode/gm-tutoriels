import './login.css'
import {
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    Slide
} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';
import {forwardRef, useCallback, useEffect, useState} from "react";
import API from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn} from "../../store/store";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLoggedIn();
            navigate('/home')
        }
    }, [])
    const navigate = (path) => {
        history.push(path)
    }
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const loggedIn = useCallback(() =>
        dispatch(setLoggedIn()), [dispatch])
    const login = () => {
        const data = {
            email: username,
            password: password
        }
        API.post('/login', data).then(res => {
            if (res.data.error === false) {
                console.log(res.data)
                //rendre l'etat globale a true
                loggedIn();
                //store token in cache
                localStorage.setItem('token', res.data.token);
                //navigate to home page
                navigate('/home')
            } else {
                setMessage(res.data.msg)
                handleClickOpen()
            }
        }).catch(error => {
            console.log(error)
        })
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={'new-login-container'}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Information"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <Card className={'new-login-card'}>
                <h2>Login</h2>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">User Name</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        value={password}
                        onChange={(event => setPassword(event.target.value))}
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock/>
                            </InputAdornment>
                        }
                    />
                    {message && (
                        <span>{message}</span>
                    )}
                </FormControl>
                <Button onClick={login} variant="contained" color="primary" disableElevation>
                    Login
                </Button>
            </Card>
        </div>
    )
}

export default Login;
