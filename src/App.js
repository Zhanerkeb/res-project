import './App.css';
import Header from './header';
import Form from './form';
import {Provider} from 'react-redux';
import configureStore from './store';
import Users from './containers/users';
import UserDetail from './components/user-detail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import * as types from './actions/types'
import { signOut } from './actions/authActions';
import Dashboard from './containers/dashboard';
const store = configureStore();

if (localStorage.token) {
  setAuthToken(localStorage.token)
  const decoded = jwt_decode(localStorage.token)
  store.dispatch({type: types.SET_CURRENT_USER, payload: decoded})
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime ) {
    store.dispatch(signOut());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
         <Switch>
           <Route exact path="/users" component={Users} />
           <Route exact path="/users/:id" component={UserDetail} />
           <Route path='/dashboard' component={Dashboard}/>
         </Switch>
      </Router>
    </Provider>
  );
}

export default App;
