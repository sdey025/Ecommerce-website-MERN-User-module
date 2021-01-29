import React, { useState } from "react";
import { FiEye, FiHeart, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Row,
  Card,
  Col,
  CardImg,
  CardBody,
  Button,
  CardImgOverlay,
  Input,
} from "reactstrap";
import Blog1 from "./blog1.jpg";
import Blog2 from "./blog2.jpg";
import Blog3 from "./blog3.jpg";
import Blog4 from "./blog4.jpg";
import Blog5 from "./blog5.jpg";
import Blog6 from "./blog6.jpg";
import Blog7 from "./blog7.jpg";
import Blog8 from "./blog8.jpg";
import Blog9 from "./blog9.jpg";
import Blog10 from "./blog10.jpg";
import Blog11 from "./blog11.jpg";
import Blog12 from "./blog12.jpg";
import "./nav.css";
function Blogs() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="light" className="py-2 fixed-top" light expand="md">
        <div className="container">
          <NavbarBrand href="/" style={{ fontSize: "35px" }}>
            COZA STORE
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="" className="ml-5" style={{ fontSize: "30px" }}>
                  Popular
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="" className="ml-5" style={{ fontSize: "30px" }}>
                  New
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="" className="ml-5" style={{ fontSize: "30px" }}>
                  Evergreen
                </NavLink>
              </NavItem>
            </Nav>
            <Link to="/">
              <NavbarText>Go back to home</NavbarText>
            </Link>
          </Collapse>
        </div>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ fontSize: "60px" }} className="text-center ">
        BLOGS
      </h1>
      <div className="container mt-4">
        <Row>
          <Col>
            <Rotate bottom left>
              <Card className="border border-dark border-3 mb-3 rounded-0">
                <CardImg
                  src={Blog1}
                  className="rounded-0"
                  style={{ width: "100%" }}
                />
                <CardBody>
                  <p>Nov 23, 2020</p>
                  <h3>NEW TRENDS FOR PARTY WEAR</h3>
                  <p className="text-muted" style={{ fontSize: "15px" }}>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                  <hr />
                  <FiEye style={{ fontSize: "20px" }} /> 1,009
                </CardBody>
              </Card>
            </Rotate>
          </Col>
          <Col>
            <Rotate bottom left>
              <Card className="border border-dark mb-3 border-3 rounded-0">
                <CardImg
                  className="rounded-0"
                  src={Blog2}
                  style={{ width: "100%" }}
                />
                <CardBody>
                  <p>Nov 23, 2020</p>
                  <h3>NEW TRENDS FOR PARTY WEAR</h3>
                  <p className="text-muted" style={{ fontSize: "15px" }}>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                  <hr />
                  <FiEye style={{ fontSize: "20px" }} /> 1,679
                </CardBody>
              </Card>
            </Rotate>
          </Col>
          <Col>
            <Rotate bottom left>
              <Card className="border border-dark mb-3 border-3 rounded-0">
                <CardImg
                  className="rounded-0"
                  src={Blog3}
                  style={{ width: "100%" }}
                />
                <CardBody>
                  <p>Nov 23, 2020</p>
                  <h3>NEW TRENDS FOR PARTY WEAR</h3>
                  <p className="text-muted" style={{ fontSize: "15px" }}>
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                  <hr />
                  <FiEye style={{ fontSize: "20px" }} /> 1,243
                </CardBody>
              </Card>
            </Rotate>
          </Col>
        </Row>
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <Card className="border border-dark border-3 rounded-0">
            <Row>
              <Col md={6} xs={12}>
                <CardImg src={Blog4} className="rounded-0" />
              </Col>
              <Col md={6} xs={12}>
                <CardBody>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="ml-5">Wedding Dress</h1>
                  <br />
                  <p className="ml-5 mr-5">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                  </p>
                  <Button
                    outline
                    color="dark"
                    className=" ml-5 mt-4 rounded-0 border-3"
                  >
                    Know More
                  </Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </ScrollAnimation>
        <h2 className="mt-5 mb-3 font-weight-bold text-center">
          Follow the best works
        </h2>
        <Row>
          <Col md={4}>
          <ScrollAnimation animateIn="fadeIn">
            <Card className="rounded-0 border-none" id="cardimg1111">
              <CardImg src={Blog7} className="rounded-0" />
              <CardImgOverlay id="imgoverlay1">
                <h1 className="text-light text-center mt-5">
                  Roy's Fashion works
                </h1>
                <p></p>
                <Button color="info mx-auto d-flex">
                  Follow{" "}
                  <FiPlus
                    className="font-weight-bold ml-1"
                    style={{ marginTop: "3px" }}
                  />
                </Button>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
          <ScrollAnimation animateIn="fadeIn">
            <Card className="rounded-0 border-none" id="cardimg1112">
              <CardImg src={Blog8} className="rounded-0" />
              <CardImgOverlay id="imgoverlay2">
                <h1 className="text-light text-center mt-5">Daniel Cloths</h1>
                <p></p>
                <Button color="info mx-auto d-flex">
                  Follow{" "}
                  <FiPlus
                    className="font-weight-bold ml-1"
                    style={{ marginTop: "3px" }}
                  />
                </Button>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
          <ScrollAnimation animateIn="fadeIn">
            <Card className="rounded-0 border-none" id="cardimg1113">
              <CardImg src={Blog9} className="rounded-0" />
              <CardImgOverlay id="imgoverlay3">
                <h1 className="text-light text-center mt-5">
                  Mindwork Fashions
                </h1>
                <p></p>
                <Button color="info mx-auto d-flex">
                  Follow{" "}
                  <FiPlus
                    className="font-weight-bold ml-1"
                    style={{ marginTop: "3px" }}
                  />
                </Button>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
          <ScrollAnimation animateIn="fadeIn">
            <Card className="mt-4 rounded-0 border-none" id="cardimg1114">
              <CardImg src={Blog10} className="rounded-0" />
              <CardImgOverlay id="imgoverlay4">
                <h1 className="text-light text-center mt-5">
                  FineArts Fashions
                </h1>
                <p></p>
                <Button color="info mx-auto d-flex">
                  Follow{" "}
                  <FiPlus
                    className="font-weight-bold ml-1"
                    style={{ marginTop: "3px" }}
                  />
                </Button>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
          <ScrollAnimation animateIn="fadeIn">
            <Card className="mt-4 rounded-0 border-none" id="cardimg1115">
              <CardImg src={Blog11} className="rounded-0" />
              <CardImgOverlay id="imgoverlay5">
                <h1 className="text-light text-center mt-5">Daisey's Works</h1>
                <p></p>
                <Button color="info mx-auto d-flex">
                  Follow{" "}
                  <FiPlus
                    className="font-weight-bold ml-1"
                    style={{ marginTop: "3px" }}
                  />
                </Button>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
          <ScrollAnimation animateIn="fadeIn">
            <Card className="mt-4 rounded-0 border-none" id="cardimg1116">
              <CardImg src={Blog12} className="rounded-0" />
              <CardImgOverlay id="imgoverlay6">
                <h1 className="text-light text-center mt-5">Indo-Graphy</h1>
                <p></p>
                <Button color="info mx-auto d-flex">
                  Follow{" "}
                  <FiPlus
                    className="font-weight-bold ml-1"
                    style={{ marginTop: "3px" }}
                  />
                </Button>
              </CardImgOverlay>
            </Card>
            </ScrollAnimation>
          </Col>
        </Row>
        <h2 className="text-center mt-5 mb-3 font-weight-bold">
          Shop product of the week
        </h2>
        <Card className="border-dark rounded-0 border-3">
          <Row>
            <Col md={5}>
              <div id="square"></div>
              <img src={Blog6} id="shoppingblog" />
            </Col>
            <Col md={7}>
              <CardImg src={Blog5} />
            </Col>
          </Row>
        </Card>
      </div>
      <br />
      <br />
      <br />
      <div style={{backgroundColor: "#dcdde1"}} className="pt-5 pb-2 border rounded-0 border-right-0 border-bottom-0 border-left-0 border-top-3">
        <div className="container">
            <Row>
                <Col md={4}>
                    <h3>COZA STORE</h3>
                    <Link><h5 className="text-dark">Home</h5></Link>
                    <Link><h5 className="text-dark">About</h5></Link>
                    <Link><h5 className="text-dark">Contact</h5></Link>
                </Col>
                <Col md={8}>
                    <h5>Don't miss the fun.</h5>
                    <Row><Input placeholder="Enter your email here..." className="rounded-0" style={{width:"80%"}}/><Button outline color="dark" className="rounded-0 border-2" style={{width:"20%"}}>Subscribe</Button></Row>
                </Col>
            </Row>
            <p className="text-center text-dark mt-4 mx-auto font-weight-bold">Copyright ©2020 All rights reserved | This template is made with <FiHeart style={{color:'red'}}/> by Shivasish Dey</p>
        </div>
      </div>
    </>
  );
}

export default Blogs;
