import React, { useContext, useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { Card, Col, Row, Button, Input, Label , Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { UserContext } from "../App";
import {useHistory, Link} from 'react-router-dom'
import pic from "./def_avatar.png";
import swal from 'sweetalert'
function Profile() {
  const [location, setadd] = useState("");
  const [bio, setbio] = useState("");
  const [dp, setdp] = useState("");
  const [cp, setcp] = useState("");
  const [products, setproducts] = useState([]);
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext);
  let date = new Date();
  let dateob = state.dob;
  let age = date.getFullYear() - dateob.substr(0, 4);
  /*  const [name, setname] = useState(state.name) */
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1)
  let num = 0
  let user = ''
  const update = () => {
    fetch('http://localhost:5000/addetails',{
      method: 'put',
      headers: {
        "Content-Type":"application/json",
        "Authorization": "Bearer "+localStorage.getItem('jwt')
      },
      body : JSON.stringify({
        location,
        bio
      })
    }).then((res)=>res.json())
    .then(result => {
      if(result.error){
        console.log(result.error)
      }else{
        swal("Success !!!","Details Updated!", "success");
        localStorage.setItem("user",JSON.stringify(result))
        history.push('/')
      }
    }).catch(err =>{
      console.log(err)
    })
  }

  useEffect(() => {
    fetch("http://localhost:5000/myproducts", {
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
    })
      .then((res) => res.json())
      .then((result) => {
          setproducts(result.products)
          console.log(products);  
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div id="theback">
      <div id="coverpic">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button color="warning" id="custom-file-upload" onClick={toggle}>
          Update Cover
        </Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle} className="font-weight-bold">Edit your cover picture</ModalHeader>
          <ModalBody>
            <label>Edit Cover Picture</label>
            <Input type="file"/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Upload
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="container">
        <Row className="m-0">
          <Col md={5}>
            <Card body id="procard">
            <FiUpload id="dp" onClick={toggle1} title="Edit profile picture"/>
            <Modal isOpen={modal1} toggle={toggle1} >
          <ModalHeader toggle={toggle1}>Edit profile picture</ModalHeader>
          <ModalBody>
            <label>Edit your profile Picture</label>
            <Input type="file"/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Upload
            </Button>{" "}
            <Button color="secondary" onClick={toggle1}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
              <img src={pic} id="displaypic" />
              
              <Link to="/sellproduct" className="mx-auto d-flex mb-0"><Button color="primary" id="editpro">
                Sell Product
              </Button></Link>
              <Row className="mt-4 ">
                <Col md={4}>
                  <Row>
                    <b className="d-flex mx-auto">{products.length}</b>
                  </Row>
                  <Row>
                    <p className="d-flex mx-auto">{products.length == 1 ? "Product" : "Products" }</p>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <b className="d-flex mx-auto">{state.wishlist.length}</b>
                  </Row>
                  <Row>
                    <p className="d-flex mx-auto">Wishlist</p>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <b className="d-flex mx-auto">22</b>
                  </Row>
                  <Row>
                    <p className="d-flex mx-auto">Orders</p>
                  </Row>
                </Col>
              </Row>
              <Row>
                <p className="mx-auto" id="proname">
                  <b>{state.name}</b>, {age}
                </p>
              </Row>
              <Row>
                <p className="mx-auto">{state.location}</p>
              </Row>
              <Row>
                <p className="mx-4 text-center">
                  {state.bio}
                </p>
              </Row>
              <Button color="danger" id="deletepro">
                Pause/Delete Account
              </Button>
            </Card>
          </Col>
          <Col md={7}>
            <Card body id="procard">
              <h3 className="text-center font-weight-bold mb-4">Add Details</h3>
              <Label className="mt-4">Address</Label>
              <Input
                placeholder="Enter Your Address"
                onChange={(e) => setadd(e.target.value)}
              />
              <Label className="mt-4">Bio</Label>
              <Input
                placeholder="Enter about yourself"
                onChange={(e) => setbio(e.target.value)}
                type="textarea"
              ></Input>
              <br />
              <Button color="primary" className="mt-4 mb-2" id="submitbtn" onClick={update}>
                Submit
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;
