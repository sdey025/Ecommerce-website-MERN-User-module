import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MyNavbar from "./Components/Navbar";
import { Switch,BrowserRouter as Router,Route, useHistory } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import {reducer, initialState} from './reducer/userReducer'
import { useReducer, useContext,useEffect,createContext } from "react";
import Profile from "./Components/Profile";
import Sell from "./Components/Sell";
import MyProducts from "./Components/MyProducts";
import ProductDetails from "./Components/ProductDetails";
import ProDetails from "./Components/ProDetails"
import Wishlists from "./Components/Wishlists";
import Buy_Item from "./Components/Buy_Item";
import PaymentSuccess from "./Components/PaymentSuccess";
import Stats from "./Components/Stats";
import MyOrders from "./Components/MyOrders";
import OrderDetails from "./Components/OrderDetails";
import Blogs from "./Components/Blogs";

export const UserContext = createContext();
function Routing() {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:'USER',payload:user})
      history.push('/')
    }else{
      history.push('/signin')
    }
  }, [])
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <MyNavbar />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/signup">
          <MyNavbar />
          <SignUp />
          <Footer />
        </Route>
        <Route exact path="/signin">
          <MyNavbar />
          <Signin />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <MyNavbar />
          <Profile/>
          <Footer />
        </Route>
        <Route exact path="/sellproduct">
          <MyNavbar />
          <Sell/>
          <Footer />
        </Route>
        <Route exact path="/myproducts">
          <MyNavbar />
          <MyProducts/>
          <Footer />
        </Route>
        <Route exact path="/myproductdetails/:id">
          <MyNavbar />
          <ProductDetails/>
          <Footer />
        </Route>
        <Route exact path="/details/:id">
          <MyNavbar />
          <ProDetails/>
          <Footer />
        </Route>
        <Route exact path="/wishlist">
          <MyNavbar />
          <Wishlists/>
          <Footer />
        </Route>
        <Route exact path="/buy/:id">
          <MyNavbar />
            <Buy_Item/>
          <Footer />
        </Route>
        <Route exact path="/success">
          <MyNavbar />
            <PaymentSuccess/>
          <Footer />
        </Route>
        <Route exact path="/stat">
          <MyNavbar />
            <Stats/>
          <Footer />
        </Route>
        <Route exact path="/orders">
          <MyNavbar />
            <MyOrders/>
          <Footer />
        </Route>
        <Route exact path="/order/details/:id">
          <MyNavbar />
            <OrderDetails/>
          <Footer />
        </Route>
        <Route exact path="/blogs">
            <Blogs />
        </Route>
      </Switch>

    </div>
  );
}

function App(params) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}} >
      <Router>
        <Routing/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
