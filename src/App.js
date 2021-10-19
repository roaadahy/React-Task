import './App.css';
import Navbar from './Navbar.jsx'
import CounterActions from './CounterActions.jsx';
import Product from './Product.jsx';
import Shop from './Shop.jsx';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route component={CounterActions} path="/counter"  />
        <Route component={Shop} path="/shop" exact/>
        <Route component={Product} path="/shop/:id" />

    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
