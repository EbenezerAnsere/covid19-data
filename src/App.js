import Login from './components/auth/Login';
import Forgetpassword from './components/auth/Forgetpassword';
import './App.scss';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import Home from './components/Home';
import Covid19 from './components/covid19/Covid19';
import Vaccine from './components/Vaccine';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      {user ? <Route exact path="/" component={Home} /> : <Login />}
      {user ? <Route path="/Covid19" component={Covid19} /> : <Route path="/login" component={Login} />}
      {user ? <Route path="/Vaccine" component={Vaccine} /> : <Route path="/login" component={Login} />}
      {user ? <Route path="/Forgetpassword" component={Forgetpassword} /> : <Route path="/login" component={Forgetpassword} />}
 
      
    </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;
