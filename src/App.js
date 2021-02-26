import './App.css';
import {useEffect} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";
import {useSelector} from "react-redux";
import Upload from "./pages/upload/upload";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import {setLoggedIn} from "./store/store";

const App = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLoggedIn();
        }
    }, [])
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path={'/login'} component={Login}/>
                <Route component={Login}/>

                <Route path={'/register'} component={Register}/>
                <Route path={'/upload'} component={Upload}/>
                <Route path={'/home'} component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
