import React, { useState, useEffect, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,Input,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card,
  Badge,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import Logo from "./Logo.png";
import { FiLogIn, FiLogOut, FiMenu, FiPlusCircle, FiSearch, FiShoppingBag, FiTrendingUp, FiUser, FiUserMinus, FiUserPlus, FiX } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom'
import Home from './Home'
import {UserContext} from  '../App'
function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setinput] = useState(false)
  const [products, setproducts] = useState([])
  const {state, dispatch} = useContext(UserContext)
  const history = useHistory()
  let i = 0
  useEffect(() => {
    fetch("http://localhost:5000/allproducts", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.reverse());
        setproducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const search = (e) => {
    e.preventDefault()
    setinput(!input);
  }
  const logout = () => {
    localStorage.clear()
    dispatch({type:'CLEAR'})
    history.push('/')
  }

  const toggle = () => setIsOpen(!isOpen);
  const [c_name, setc_name] = useState('div1')
  const [logged, setlogged] = useState(1)
  console.log(state)
  return (
    <div id={c_name}>
      <Navbar expand="md" className="nav">
        <NavbarBrand className="navb">
          <b>COZA</b> STORE
        </NavbarBrand>
        <NavbarToggler onClick={toggle} >{!isOpen ? <FiMenu/> : <FiX/>}</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className=" " style={{ marginLeft: "40px" }}>
              <Link id="link" to="/">Home</Link>
            </NavItem>
            <NavItem className=" ml-4">
              <Link id="link" to="">Shop</Link>
            </NavItem>
            <NavItem className=" ml-4">
              <Link id="link" to="">Features</Link>
            </NavItem>
            <NavItem className=" ml-4">
              <Link id="link" to="/blogs">Blog</Link>
            </NavItem>
            <NavItem className=" ml-4">
              <Link id="link" to="">About</Link>
            </NavItem>
            <NavItem className=" ml-4">
              <Link id="link" to="">Contact</Link>
            </NavItem>
            {/*             <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {input ? <Input className="toginp" placeholder="Search Items..."/> : null}
          <NavItem className=" ml-1">
            <Link id="link" to="">{!input ? <FiSearch onClick={(e) => search(e)}/> : <FiX onClick={(e) => search(e)}/>}</Link>
          </NavItem>
            {
              !state ?<><NavItem className=" ml-4">
              <Link id="link" to="/signin"><FiLogIn title="SignIn"/></Link>
            </NavItem>
            <NavItem className=" ml-4"> 
              <Link id="link" to="/signup"><FiUserPlus title="SignUp"/></Link>
            </NavItem> </> : <><NavItem className=" ml-4">
            <Link id="link" to="/orders"><FiShoppingCart title="orders"/></Link>
          </NavItem>
          <NavItem className=" ml-4">
            <Link id="link" to={state ? "wishlist" : "signin"}><FiHeart title="Wishlist"/></Link>
          </NavItem>
          <NavItem className="">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
              <FiMenu style={{color:"#393333"}}/>
              </DropdownToggle>
              <DropdownMenu right>
                <Link id="link" to="profile"><DropdownItem id="drp"><FiUser className="mr-2 mb-1 user"/>{state.name}</DropdownItem></Link>
                <Link id="link" to="sellproduct"><DropdownItem id="drp"><FiPlusCircle className="mr-2 mb-1 plus"/>Upload Product</DropdownItem></Link>
                <Link id="link" to="/myproducts"><DropdownItem id="drp"><FiShoppingBag className="mr-2 mb-1 bag"/>My Products</DropdownItem></Link>
                <Link id="link" to="/stat"><DropdownItem id="drp"><FiTrendingUp className="mr-2 mb-1 up"/>Products Stats</DropdownItem></Link>
                <DropdownItem divider />
                <DropdownItem onClick={logout} id="drp"><FiLogOut className="mr-2 mb-1 logout" />Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem></>
            }         
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
