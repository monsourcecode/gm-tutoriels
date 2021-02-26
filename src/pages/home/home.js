import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {useCallback, useState} from "react";
import {setLoggedOut} from "../../store/store";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const isLoggedIn = localStorage.getItem('token')
    let user = localStorage.getItem('user')
    console.log(user)
    user = user ? JSON.parse(user) : {}
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

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
        <>
            {isLoggedIn && user.type == 'APP' && (
                <div style={{
                    width: '100%',
                    height: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div style={{
                        width: '80%', height: 40,
                        backgroundColor: '#476ed0', display: "flex", justifyContent: 'space-between'
                    }}>
                        <span style={{color: '#fff'}}>{email}</span>
                        <span style={{color: '#fff'}}>{name}</span>
                    </div>
                    <h1>Home page</h1>
                    <Button onClick={logout}>Logout</Button>
                </div>
            )}

            {!isLoggedIn && user.type == 'ENS' && (
                <>
                    <h1>Not logging in</h1>
                    <Link to="/login">Go Login</Link>
                </>
            )}
            <div>
                <h1>All Times </h1>
            </div>
        </>
    )
}
export default Home
