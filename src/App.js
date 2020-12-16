import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import AddBookMark from './pages/add-bookmark/AddBookMark'
import Grid from "@material-ui/core/Grid";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route path="/add-bookmark" component={AddBookMark} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
  );
}

export default App;
