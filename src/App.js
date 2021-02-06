import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ListFilms from "./pages/listfilms/listfilms";
import AddFilm from "./pages/addfilm/addfilm";

const App = ()=> {
  return (
       <BrowserRouter>
         <Switch>
             <Route exact path="/">
                 <Redirect to="/listfilms"/>
             </Route>
            <Route path={'/listfilms'} component={ListFilms}/>
            <Route path={'/addfilm'} component={AddFilm}/>
         </Switch>
       </BrowserRouter>
  );
}

export default App;
