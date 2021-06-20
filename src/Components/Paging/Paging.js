import React, {useEffect,useState} from 'react'
import './Paging.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Page2 from './Page/Page2';
import Page1 from './Page/Page1';
function Paging(){
   
    return(
        <div>
            <Router>
            <Switch>
    <Route exact path="/"><Page1/></Route>
    <Route exact path="/page2"><Page2/></Route>
    </Switch>
  <ul className="pagination">
    <li className="page-item"><Link exact className="page-link" to="/">1</Link></li>
    <li className="page-item"><Link className="page-link" to="/page2">2</Link></li>
  </ul>
</Router>
        </div>
    )
}
export default Paging