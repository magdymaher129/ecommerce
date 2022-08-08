import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Product from "./component/Product";
import Cart from "./component/cart/Cart";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import UserContextProvider from "./context/userContext";
import PrivateRoute from "./component/PrivateRoute";
import ResetPage from "./pages/login/ResetPage";

function App() {
  return (
        <UserContextProvider>
    <BrowserRouter>
      <Switch>
  
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/products/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
        <Route path='/register' component={SignUp} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/reset'component={ResetPage}/>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
        </UserContextProvider>
  );
}

export default App;
