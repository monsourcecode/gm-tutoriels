import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AddTask from "./pages/addtask/addtask";
import NotFound from "./pages/error/error";
import ListTask from "./pages/listtask/listtask";

const App = ()=> {
  return (
       <BrowserRouter>
         <Switch>
             <Route exact path="/">
                 <Redirect to="/listtasks"/>
             </Route>
            <Route  path={'/listtasks'} component={ListTask}/>
            <Route path={'/addtask'} component={AddTask}/>
             <Route component={NotFound}/>
         </Switch>
       </BrowserRouter>
  );
}

export default App;
