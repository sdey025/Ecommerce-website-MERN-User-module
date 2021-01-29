import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, Col, Row } from "reactstrap";

function MyOrders() {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getorders", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setorders(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="mydiv123" className="py-5">
        <h1 className="mb-4 text-center">My Orders</h1>
        <div className="container">

 
      <Row>
        {orders.map((item) => {
          return( 
            <Col md={3}>
              <Card className="shadow" style={{overflow:"hidden",border:"none"}}>
                  <CardImg top src={item.ppic} style={{width:"100%",height:"260px"}} />
                  <CardBody>
                    <h5>{item.pname}</h5> 
                    <p style={{marginTop:'-8px'}}>for</p>
                    <h6 style={{marginTop:'-15px'}}>{item.pgender}</h6>
                    <p>Ordered on: <b>{item.date}</b></p>
                    <p style={{marginTop:'-8px'}}>Cost: <b>₹{item.pcost}</b>(Paid)</p>
                    <Link to={`/order/details/${item._id}`}><Button color="primary" className="btn-sm ">Details</Button></Link>
                  </CardBody>
              </Card>
            </Col>
            );
        })}
      </Row>
      </div>
    </div>
  );
}

export default MyOrders;
