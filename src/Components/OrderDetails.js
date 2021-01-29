import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  Card,
  TabContent,
  Label,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Input,
} from "reactstrap";
import { HiOutlineInboxIn } from "react-icons/hi";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { UserContext } from "../App";
import swal from "sweetalert";
import {
  FiCheckSquare,
  FiClock,
  FiMapPin,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./nav.css";
import classnames from "classnames";
function OrderDetails() {
  const { id } = useParams();
  const { state, dispatch } = useContext(UserContext);
  const [payment, setpayment] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [rating, setrating] = useState(null);
  const [feedback, setfeedback] = useState("");
  const [reporter_name, setreporter_name] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')
  const [product_id, setproduct_id] = useState('')
  const reporter_id = state._id
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setrating(newRating);
  };
  const giverating = (pid) => {
    if(!rating || !feedback){
      swal('Empty Fields :(','Please fill each fields !!!','warning')
    }
    else{
      fetch("http://localhost:5000/feed", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          feedback,
          pid,
          myid: state._id,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          swal("Done !!!", "Thanks for your valuable feedback", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/orderstatus/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setpayment(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const report = (pid) => {
    setproduct_id(pid)
    if(!reporter_name || !subject || !message){
      swal('Empty Fields :(','Please fill each fields !!!','warning')
    }
    else{
     
      fetch('http://localhost:5000/report',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          reporter_id,
          reporter_name,
          product_id,
          subject,
          message
        })
      }).then(result => {
        console.log(result)
        swal("Done !!!", "Your issue have been submitted, We will try our best to fix it...", "success");
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  const status = (item) => {
    if (item.delivered == "no") {
      return (
        <>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.date}</div>
              <div className="timeline-icon">
                <HiOutlineInboxIn className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Packed</h3>
                <p className="description">
                  Your product has been packed at <b>Delhi, India</b>.
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">
                <FiClock />
              </div>
              <div className="timeline-icon bg-secondary">
                <FiTruck className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Yet to Ship</h3>
                <p className="description">
                  Your product yet to be shipped !!! Once it will shipped you
                  will be notified 😊
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">
                <FiClock />
              </div>
              <div className="timeline-icon bg-secondary">
                <FiMapPin className="mb-1 text-light" />
              </div>
              <div className="inner-content">
                <h3 className="title">Yet to Reach</h3>
                <p className="description">
                  Your product is yet to reach to your nearest hub. Be
                  patient...
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">
                <FiClock />
              </div>
              <div className="timeline-icon bg-secondary">
                <FiCheckSquare className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Yet to Deliver</h3>
                <p className="description">
                  Your product will be Delivered within 15 working days 😊
                </p>
              </div>
            </a>
          </div>
        </>
      );
    } else if (item.delivered == "ship") {
      return (
        <>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.date}</div>
              <div className="timeline-icon">
                <HiOutlineInboxIn className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Packed</h3>
                <p className="description">
                  Your product has been packed at <b>Delhi, India</b>.
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.shipping_date}</div>
              <div className="timeline-icon">
                <FiTruck className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Shipped</h3>
                <p className="description">
                  Your product have been shipped !!! It will reach you within 7
                  working days 😊
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">
                <FiClock />
              </div>
              <div className="timeline-icon bg-secondary">
                <FiMapPin className="mb-1 text-light" />
              </div>
              <div className="inner-content">
                <h3 className="title">Yet to Reach</h3>
                <p className="description">
                  Your product is yet to reach to your nearest hub. Be
                  patient...
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">
                <FiClock />
              </div>
              <div className="timeline-icon bg-secondary">
                <FiCheckSquare className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Yet to Deliver</h3>
                <p className="description">
                  Your product have been shipped !!! It will reach you within 7
                  working days 😊
                </p>
              </div>
            </a>
          </div>
        </>
      );
    } else if (item.delivered == "reach") {
      return (
        <>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.date}</div>
              <div className="timeline-icon">
                <HiOutlineInboxIn className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Packed</h3>
                <p className="description">
                  Your product has been packed at <b>Delhi, India</b>.
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.shipping_date}</div>
              <div className="timeline-icon">
                <FiTruck className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Shipped</h3>
                <p className="description">
                  Your product have been shipped !!! It will reach you within 7
                  working days 😊
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.reaching_date}</div>
              <div className="timeline-icon">
                <FiMapPin className="mb-1 text-light" />
              </div>
              <div className="inner-content">
                <h3 className="title">Reached</h3>
                <p className="description">
                  Your product has reached to your nearest hub.
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">
                <FiClock />
              </div>
              <div className="timeline-icon bg-secondary">
                <FiCheckSquare className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Yet to Deliver</h3>
                <p className="description">
                  Your product have been shipped !!! It will reach you within 7
                  working days 😊
                </p>
              </div>
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.date}</div>
              <div className="timeline-icon">
                <HiOutlineInboxIn className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Packed</h3>
                <p className="description">
                  Your product has been packed at <b>Delhi, India</b>.
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.shipping_date}</div>
              <div className="timeline-icon">
                <FiTruck className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Shipped</h3>
                <p className="description">
                  Your product have been shipped !!! It will reach you within 7
                  working days 😊
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.reaching_date}</div>
              <div className="timeline-icon">
                <FiMapPin className="mb-1 text-light" />
              </div>
              <div className="inner-content">
                <h3 className="title">Reached</h3>
                <p className="description">
                  Your product has reached to your nearest hub.
                </p>
              </div>
            </a>
          </div>
          <div className="timeline">
            <a href="#" className="timeline-content">
              <div className="timeline-year">{item.delivery_date}</div>
              <div className="timeline-icon">
                <FiCheckSquare className="mb-1" />
              </div>
              <div className="inner-content">
                <h3 className="title">Delivered</h3>
                <p className="description">
                  Your product has been delivered on {item.delivery_date} !!!
                  Hope you must be enjoying the product, you can rate the
                  product according to your satisfaction 😊
                </p>
              </div>
            </a>
          </div>
        </>
      );
    }
  };

  return (
    <div id="mydiv123" className="py-5">
      <div className="container">
        <Card body className="shadow-sm border-0" id="mycard1234">
          <h2 className="font-weight-bold text-center mt-2 mb-3">
            Product Status
          </h2>
          <PerfectScrollbar style={{ height: "300px" }}>
            {payment.map((item) => {
              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-timeline">{status(item)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
          <br />
          <Nav tabs>
            <NavItem id="mynavitem">
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Rate product
              </NavLink>
            </NavItem>
            <NavItem id="mynavitem">
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Report any issue
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div className="mx-auto d-flex justify-content-center">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      isHalf={true}
                      emptyIcon={<BsStar />}
                      halfIcon={<BsStarHalf />}
                      fullIcon={<BsStarFill />}
                      activeColor="#ffd700"
                      size={45}
                    />
                  </div>
                  <label className="mt-3 text-center justify-content-center d-flex">
                    Give your Feedback
                  </label>
                  <Input
                    type="textarea"
                    className="mx-auto"
                    style={{ width: "60%" }}
                    onChange={(e) => setfeedback(e.target.value)}
                  />
                  {payment.map((item) => {
                    return (
                      <Button
                        color="primary"
                        onClick={() => giverating(item.pid)}
                        className="mx-auto d-flex mt-3"
                      >
                        Submit
                      </Button>
                    );
                  })}
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Input placeholder="Your Name... " onChange={e => setreporter_name(e.target.value)} className="mt-4 mx-auto" id="report"/> 
              <Input placeholder="Subject..." onChange={e => setsubject(e.target.value)} className="mt-4 mx-auto" id="report"/> 
              <Input placeholder="Leave a message by explaining the reasons..." onChange={e => setmessage(e.target.value)} type="textarea" className="mt-4 mx-auto" id="report"/>
              {payment.map(item => {
                return (
                  <Button color="primary" onClick={() => report(item.pid)} className="btn-sm mx-auto d-flex mt-4">Submit</Button>
                )
              })}
            </TabPane>
          </TabContent>
        </Card>
      </div>
    </div>
  );
}

export default OrderDetails;
