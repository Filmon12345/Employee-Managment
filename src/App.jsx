import Home from "./Home.jsx";
import "./App.css";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Customer from "./customer.jsx";
import Navbar from "./Navbar.jsx";
import Employee from "./Employee.jsx";
import Dictionary from "./Dictionary.jsx";
export default function App() {
 
  return (
    <Router>
        <div className="App" >
        <Navbar>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route path="/Employee" >
            <Employee />
            </Route>
            <Route path="/Customer">
           <Customer/>
            </Route>
            <Route path="/Dictionary">
           <Dictionary/>
            </Route>
          </Switch>
        </Navbar>
      </div>
    </Router>
  );
}
