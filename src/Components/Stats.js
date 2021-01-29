import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
function Stats() {
  const [product, setproduct] = useState([])
  const [orders, setorders] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/myproducts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setproduct(data.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      fetch('http://localhost:5000/getpayment',{
          headers:{
              "Content-Type":"application/json"
          }
      }).then(res => res.json())
      .then(data => {
          console.log(data)
          setorders(data)
      })
      .catch(err => {
          console.log(err)
      })
  }, []);

/*   for(let i = 0 ; i < 5 ; i++){
      for(let j = 0 ; j < user.length ; j++){
          if(product.orders[i] == user[j]._id){
            setnames(user[j].name)
          }
      }
  } */
  
  return (
    <div id="mydiv123">
      <h3 className="pt-4 text-center font-weight-bold">Products Stats</h3>
      <div className="container mt-4">
        <Card className="py-4">
          {product.map((item) => {
            return (
              <CardBody>
                <Row>
                  <Col md={2} xs={12}>
                    <img src={item.photo} className="mx-auto" style={{ width: "100%" }} />
                  </Col>
                  <Col md={2} xs={12} className="text-center">{item.p_name}</Col>
                  <Col md={2} xs={12} className="text-center">Cost: ₹{item.cost}</Col>
                  <Col md={2} xs={12} className="text-center">Description: {item.desc}</Col>
                  <Col md={2} xs={12} className="text-center">Buyers: {orders.map(order => { 
                      if(order.pid == item._id){
                          return (
                              <>
                                <p>{order.uname}</p><br/>
                              </>
                          )
                      }
                  })}</Col>
                  <Col md={2} xs={12} className="text-center">Total Sell: {item.cost * item.orders.length}</Col>
                </Row>
              </CardBody>
            );
          })}
        </Card>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Stats;
