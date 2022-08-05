import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './App.css';
import './results.css';
import Home from "./Home";
import movieBoard from "./Views/movieBoard";
import gallery from "./Views/gallery";




function App() {
 
   return(
      <Router>
         <div className="main">
            <Home />
         </div> 

         <Switch>
              <Route path="/" exact component={ App } />
              <Route path="/Home" component={ Home } />
              <Route path="/movieBoard" component={ movieBoard } />
              <Route path="/gallery" component={ gallery }/>
          </Switch>

      </Router>
   )
  
}

export default App;
