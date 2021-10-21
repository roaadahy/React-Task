import './App.css';
import Navbar from './Navbar.jsx'
import Counter from './Counter.jsx';
import Product from './Product.jsx';
import Shop from './Shop.jsx';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo.jsx'
import About from './About'
function App() {
  return (
    
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route component={About} path="/" exact />
        <Route component={Counter} path="/counter"  />
        <Route component={Shop} path="/shop" exact/>
        <Route component={Product} path="/shop/:id" />
        <Route component={Todo} path="/todo"/>


    </Switch>
    <Footer />
    </div>
    </Router>
    
  );
}

export default App;
