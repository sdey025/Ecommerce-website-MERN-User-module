import React,{useState} from "react";
import "./nav.css";
import swal from 'sweetalert'
import { Card, Button, CardTitle, ToastHeader, ToastBody, Toast,  CardText, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import {useHistory, Link, matchPath} from 'react-router-dom'
function SignUp() {
  const history = useHistory()
  const [tandc, settandc] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setcPassword] = useState('')
  const [dob, setDob] = useState('')
  const [show, setshow] = useState(false)

/*   const [invalidE, setinvalidE] = useState(false)
  const [success, setSuccess] = useState(false) */
  const check = () => {
    settandc(!tandc)
  }
  const postData = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      swal("Oops !!!","Invalid Email ID!", "error");
    }else if(!tandc){
      setshow(!show)
    }else if(password != c_password){
      swal("Opps !!!","Password didn't Match", "error")
    }else if(password.length < 8){
      swal("Opps !!!","Your Password atleast contain 8 characters", "error")
    }
    else{
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          dob
        }),
      }).then((res) => res.json())
      .then((data) => {
        if(data.error){
          swal("Opps !!!",data.error, "error");
        }else{
          swal("Great !!!","Successfully Registered!", "success");
          console.log(data)
      /* history.push('/') */
        }
      })
    }
  }
  return (
    <div id="signup_back">
      <Card body className="card1 mx-auto">
        <CardTitle tag="h3" id="ct">SignUp</CardTitle>
        <Input id="signup_input" onChange={(e) => setName(e.target.value)} placeholder="Your Name" required/>
        <Input id="signup_input" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required/>
        <Input id="signup_input" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="Password" required/>
        {password.length < 8 && password != '' ? <fragment className="text-danger imwarning font-weight-bold" style={{marginTop:'-15px',marginLeft:'15%',fontSize:'13px'}}>**Your password atleast contain 8 characters</fragment>: null}
        {password.length >= 8 && password.length <= 10 ? <fragment className="text-warning imwarning font-weight-bold" style={{marginTop:'-15px',marginLeft:'15%',fontSize:'13px'}}>**Your password is weak</fragment>: null}
        {password.length > 10 && password.length <= 14 ? <fragment className="text-info imwarning font-weight-bold" style={{marginTop:'-15px',marginLeft:'15%',fontSize:'13px'}}>**Your password is OK!</fragment>: null}
        {password.length > 14 ? <fragment className="text-success imwarning font-weight-bold" style={{marginTop:'-15px',marginLeft:'15%',fontSize:'13px'}}>**Your password is Strong!</fragment>: null}
        <Input id="signup_input" onChange={(e) => setcPassword(e.target.value)} placeholder="Confirm Password" type="Password" required/>
        {password != c_password && c_password.length > 0 ? <fragment className="text-danger imwarning font-weight-bold" style={{marginTop:'-15px',marginLeft:'15%',fontSize:'13px'}}>**Passwords are not matching</fragment> : null}
        
        <Input id="signup_input" onChange={(e) => setDob(e.target.value)} type="date" placeholder="Enter Your Date of Birth" required/>
        {/* <Input id="signup_input" onChange={(e) => setDob(e.target.value)} type="" placeholder="Enter Your Date of Birth" required/> */}
        <br/>
        <FormGroup check className="mx-auto">
        <Label check>
          <Input type="checkbox" onChange={check} required/>{' '}
          {!tandc ? <p className="text-danger">I accept all Terms & Conditions {show ? <p className="text-danger ml-2">**Required</p> : null}</p> : <p className="text-success">I accept all Terms & Conditions</p>}
        </Label>
      </FormGroup>
        <Button className="signupbtn" onClick={postData}>Signup</Button>
        <p className="text-center mt-3" >Don't have an account? <Link to="/signin">Signin</Link> </p>
      </Card>
    </div>
  );
}

export default SignUp;
