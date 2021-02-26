import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";
import Upload from "./pages/upload/upload";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Items from "./pages/Items/Items";

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/upload'} component={Upload}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/items'} component={Items}/>
                <Route component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
