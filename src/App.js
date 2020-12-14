import logo from './logo.svg';
import './App.css';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home/Home'
import AddBookMark from './pages/add-bookmark/AddBookMark'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/add-block" component={AddBookMark} />
        <Route path="/" component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
