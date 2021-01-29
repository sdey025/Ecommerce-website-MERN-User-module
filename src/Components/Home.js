import React, { useState, useEffect, useContext } from "react";
import "./nav.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Col,
  Row,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  TabPane,
  CardText,
  TabContent,
  CardImg,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import Typical from "react-typical";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
function Home() {
  const { state, dispatch } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("1");
  /* const { state, dispatch } = useContext(UserContext); */
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [products, setproducts] = useState([]);

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
  return (
    <>
      <div id="upperbody">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="m-0 row1">
          <Col md={6}></Col>
          <Col md={6}>
            <div className="typical">
              <Typical
                steps={[
                  "MEN COLLECTION",
                  3000,
                  "WOMEN COLLECTION",
                  3000,
                  "KIDS COLLECTION",
                  3000,
                ]}
                loop={Infinity}
                wrapper="h1"
              />
              <Typical
                steps={[
                  "New Arrivals 2021",
                  3000,
                  "Jackets & Coats",
                  3000,
                  "Winter Wears",
                  3000,
                ]}
                loop={Infinity}
                wrapper="h4"
              />
            </div>
            <Button id="btn1">Shop Now</Button>
          </Col>
        </Row>
      </div>
      <div className="container" id="container1">
        <Row className="m-0 cont">
          <Col md={4}>
            <Card id="mycard">
              <CardBody>
                <Row className="m-0">
                  <Col md={5}>
                    <h5 className="font-weight-bold mt-4">WOMEN</h5>
                    <h6 className="font-weight-bold mt-4">FASHION</h6>
                    <CardText>2021</CardText>
                    <Button color="primary" className="mt-2 btn-sm">
                      See More
                    </Button>
                  </Col>
                  <Col md={7}>
                    <CardImg src={card1} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card id="mycard">
              <CardBody>
                <Row className="m-0">
                  <Col md={5}>
                    <h5 className="font-weight-bold mt-4">MEN</h5>
                    <h6 className="font-weight-bold mt-4">FASHION</h6>
                    <CardText>2021</CardText>
                    <Button color="primary" className="mt-2 btn-sm">
                      See More
                    </Button>
                  </Col>
                  <Col md={7}>
                    <CardImg src={card2} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card id="mycard">
              <CardBody>
                <Row className="m-0">
                  <Col md={5}>
                    <h5 className="font-weight-bold mt-4">KIDS</h5>
                    <h6 className="font-weight-bold mt-4">FASHION</h6>
                    <CardText>2021</CardText>
                    <Button color="primary" className="mt-2 btn-sm">
                      See More
                    </Button>
                  </Col>
                  <Col md={7}>
                    <CardImg
                      src={card3}
                      className="mx-auto d-flex"
                      style={{ width: "70%" }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container " id="container1">
        <h1>PRODUCT OVERVIEW</h1>
        <Tabs className="mt-4 mb-4">
          <TabList>
            <Tab>All Products</Tab>
            <Tab>Women</Tab>
            <Tab>Men</Tab>
            <Tab>Kids</Tab>
          </TabList>

          <TabPanel className="mt-4">
            <Row>
              {products.map((item) => {
                  return (
                    <Col md={3}>
                      <Card className="homecard">
                        <CardImg
                          top
                          width="100%"
                          src={item.photo}
                          alt="Card image cap"
                          className="homecardimg"
                        />
                        {state ? (
                          <Link to={state._id == item.postedby ? "/myproductdetails/"+item._id : "/details/"+item._id} className="mx-auto">
                            <Button color="dark" className="homebtn">
                              Details
                            </Button>
                          </Link>
                        ) : (
                          <Link to="/signin" className="mx-auto">
                            <Button color="dark" className="homebtn">
                              Details
                            </Button>
                          </Link>
                        )}
                      </Card>
                    </Col>
                  );           
              })}
            </Row>
          </TabPanel>
          <TabPanel>
            <Row>
            {products.map(item => {
              if(item.gender == 'Female'){
                return(
                  <Col md={3}>
                    <Card className="homecard">
                      <CardImg
                        top
                        width="100%"
                        src={item.photo}
                        alt="Card image cap"
                        className="homecardimg"
                      />
                      {state ? (
                        <Link to={state._id == item.postedby ? "/myproductdetails/"+item._id : "/details/"+item._id} className="mx-auto">
                          <Button color="dark" className="homebtn">
                            Details
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/signin" className="mx-auto">
                          <Button color="dark" className="homebtn">
                            Details
                          </Button>
                        </Link>
                      )}
                    </Card>
                  </Col>
                )
              }
            })}</Row>
          </TabPanel>
          <TabPanel>
            <Row>
          {products.map(item => {
              if(item.gender == 'Male'){
                return(
                  <Col md={3}>
                    <Card className="homecard">
                      <CardImg
                        top
                        width="100%"
                        src={item.photo}
                        alt="Card image cap"
                        className="homecardimg"
                      />
                      {state ? (
                        <Link to={state._id == item.postedby ? "/myproductdetails/"+item._id : "/details/"+item._id} className="mx-auto">
                          <Button color="dark" className="homebtn">
                            Details
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/signin" className="mx-auto">
                          <Button color="dark" className="homebtn">
                            Details
                          </Button>
                        </Link>
                      )}
                    </Card>
                  </Col>
                )
              }
            })}</Row>
          </TabPanel>
          <TabPanel>
            <Row>
          {products.map(item => {
              if(item.gender == 'Kids'){
                return(
                  <Col md={3}>
                    <Card className="homecard">
                      <CardImg
                        top
                        width="100%"
                        src={item.photo}
                        alt="Card image cap"
                        className="homecardimg"
                      />
                      {state ? (
                        <Link to="" className="mx-auto">
                          <Button color="dark" className="homebtn">
                            Details
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/signin" className="mx-auto">
                          <Button color="dark" className="homebtn">
                            Details
                          </Button>
                        </Link>
                      )}
                    </Card>
                  </Col>
                )
              }
            })}</Row>
          </TabPanel>
        </Tabs>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
