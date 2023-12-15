import './App.css';
import Todolist from './todolist'
import UseEffect from './useEffect';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>

            <Route path="/Create">
              <Create/>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
      
   
  );
}

export default App;
