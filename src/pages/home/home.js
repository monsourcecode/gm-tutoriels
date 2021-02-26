import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useCallback} from "react";
import {setLoggedOut} from "../../store/store";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const navigate = (path) => {
        history.push(path)
    }
    const loggedOut = useCallback(() =>
        dispatch(setLoggedOut()), [dispatch])
    const logout = () => {
        loggedOut();
        localStorage.setItem('token', '')
        navigate('/login')
    }
    return (
        <div>
            <h1>Home page</h1>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}
export default Home
