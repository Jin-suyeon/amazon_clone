import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter, Switch, Route , Link} from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;