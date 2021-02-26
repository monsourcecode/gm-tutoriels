import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Upload from "./pages/upload/upload";

const App = ()=> {
  return (
       <BrowserRouter>
         <Switch>
             <Route exact path="/">
                 <Redirect to="/login"/>
             </Route>
            <Route path={'/login'} component={Login}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/upload'} component={Upload}/>
          </Switch>
       </BrowserRouter>
  );
}

export default App;
