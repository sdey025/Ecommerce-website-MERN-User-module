import React, { useContext, useEffect, useState } from "react";
import { FiInfo, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, Col, Row } from "reactstrap";
import { UserContext } from "../App";
import empty from './empty.svg'

function MyProducts() {
  const { state, dispatch } = useContext(UserContext);
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/myproducts", {
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
    })
      .then((res) => res.json())
      .then((result) => {
          setproducts(result.products);
          console.log(result.products);  
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="myprodiv">
      <div className="container">
        <h3 className="text-center pt-4 font-weight-bold">My Products</h3>
        <Row className="d-flex justify-content-center">
          {products.length > 0 ? (
            products.map((item) => {
              return (
                <>
                  <Col md={3} className="py-4">
                    <Card
                      
                      id="myprocard"
                      className="shadow-sm border border-0 rounded"
                    >
                      <CardImg src={item.photo} id="cardimage" />
                      <Row>
                        <Link to={"/myproductdetails/"+item._id} className="mx-auto"><Button color="light" className="cardbtn mx-auto">
                          <FiInfo className="mb-1" /> Details
                        </Button></Link>
                      </Row>
                    </Card>
                  </Col>
                </>
              );
            })
          ) : (
            <div>
              
              <h2 className="text-center my-4" id="thehead">You haven't added any products...</h2>
              <img src={empty} className="mx-auto d-flex mt-4 mb-4"/>
              <Link to="/sellproduct" style={{textDecoration:"none"}}><Button color="primary" className="d-flex mt-4 mx-auto" style={{ width: "auto" }}>
                Upload Product
              </Button></Link>
              <br/>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}

export default MyProducts;
