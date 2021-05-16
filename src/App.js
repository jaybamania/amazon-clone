
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import Payment from './Components/Payment/Payment'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(()=>{

    //will onlu run once when the app component loads

    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>> ',authUser)

      if(authUser){
        //for user to stay login
          dispatch({
            type:'SET_USER',
            user: authUser
          })
      }else{
        //if user logged out
          dispatch({
            type:'SET_USER',
            user:null
          })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
            <h1>Payment Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
