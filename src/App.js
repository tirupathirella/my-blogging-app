import NavBar from './components/NavBar';
import Home from './components/Home'
import Create from './components/Create';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className='content'>
          <Switch>
             <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/create'>
                 <Create></Create>
              </Route>
              <Route path='/blogs/:id'>
                 <BlogDetails></BlogDetails>
              </Route>
              <Route path='*'>
                 <NotFound></NotFound>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
