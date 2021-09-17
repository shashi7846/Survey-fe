import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./nav";
import Register from "./register";
import Login from "./login";
import Survey from "./survey";
import Home from "./home";
function App() {
  return (
    <>
 <Router>
   <Nav></Nav>
   <div classname="container">
     <Switch>
       <Route path='/register' component={Register} exact />
       <Route path='/login' component={Login} exact />
       <Route path="/home/:id" component={Home} exact />
       <Route path='/survey/:id' component={Survey} exact />
     </Switch>
   </div>
 </Router>
    </>
  );
}

export default App;
