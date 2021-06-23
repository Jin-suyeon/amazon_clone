import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter, Switch, Route , Link} from 'react-router-dom'
import Login from './Login'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('사용자는 다음과 같습니다', authUser)
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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