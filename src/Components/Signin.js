import React,{useState,useContext} from "react";
import {
  Card,Row,
  CardBody,
  Input,
  Button,
  CardTitle,
  Label,
  FormGroup,
} from "reactstrap";
import "./nav.css";
import {Link,useHistory} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {UserContext} from '../App'
function Signin() {
  const {state,dispatch} = useContext(UserContext)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  const history = useHistory()
    const postDatasignin = () => {
        fetch('http://localhost:5000/signin',{
          method : 'POST',
          headers : {
            "Content-Type":"application/json"
          },
          body : JSON.stringify({
            email,
            password
          })
        }).then(res => res.json())
        .then(result =>{
          if(result.error){
            seterror(result.error)
          }else{
            localStorage.setItem('jwt',result.token)
            localStorage.setItem('user',JSON.stringify(result.user))
            dispatch({type:"USER",payload:result.user})
            /* console.log(result) */
            history.push('/')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  return (
    <div className="signin_back">
      <Card className="signin_card">
        <CardBody>
          <CardTitle tag="h3" id="ct">
            SignIn
          </CardTitle>
          <FormGroup>
            <Input id="signup_input" onChange={(e)=> setemail(e.target.value)} placeholder="Enter your Email" />
          </FormGroup>
          <FormGroup>
            <Input id="signup_input" onChange={(e)=> setpassword(e.target.value)} placeholder="Enter your Password" />
          </FormGroup>
          <Button className="mx-auto d-flex signinbtn" onClick={postDatasignin}>Login</Button>
          <Row><Button outline className="ml-auto mr-2 mt-3 d-flex icon_btn">Continue using <FcGoogle id="signin_icons"/></Button><Button outline className="ml-2 mt-3 mr-auto d-flex icon_btn">Continue using <FaFacebook style={{color:"#0570E6"}} id="signin_icons"/></Button></Row>
          <p className="text-center mt-3" >Don't have an account? <Link to="/signup">Signup</Link> </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Signin;
