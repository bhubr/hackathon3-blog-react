import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import PostDetails from './components/post-details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:slug">
          <PostDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
