import React, { useEffect, useState } from "react";
import { FiSlash, FiXCircle } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "reactstrap";
import {useHistory} from 'react-router-dom'
import { BsExclamationCircle } from "react-icons/bs";
function ProductDetails() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const history = useHistory()
  useEffect(() => {
    fetch("http://localhost:5000/myproductdetails/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setproduct(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteItem = (id) => {
    fetch('http://localhost:5000/deleteproduct/'+id,{
      method:"DELETE",
      headers: {
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      history.push('/myproducts')
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div id="myprodiv">
      <div className="container py-4">
        {product.map((item) => {
          return (
            <Card body>
              <Row className="m-0">
                <Col md={4}>
                  <img src={item.photo} id="detailimg" className="rounded shadow"/>
                </Col>
                <Col md={5} className="py-4">
                    <h2 className="ml-4 font-weight-bold">{item.p_name}</h2>
                    <p className="ml-4">for</p>
                    <h5 className="ml-4 font-weight-bold">{item.gender}</h5>
                    <p className="ml-4 mt-4">Description:</p>
                    <p className="ml-4 font-weight-bold">{item.desc}</p>
                    <p className="ml-4">Cost:</p>
                    <h4 className="ml-4 font-weight-bold">₹{item.cost}</h4>
                </Col>
                <Col md={3}>
                    <FiSlash className=" detailicons mx-auto" />
                    <Button color="warning"  outline className="mx-auto d-flex mt-3 mb-4 btn-sm">Make It Out of Stock</Button>
                    <hr/>
                    <FiXCircle className="mt-4 detailicons1 mx-auto"/>
                    <Button color="danger" onClick={() => deleteItem(item._id)} outline className="mx-auto d-flex mt-3 mb-4 btn-sm">Delete this item</Button>
                    <hr/>
                    <h3 className="text-center">{item.orders.length}</h3>
                    <h4 className="text-center">{item.orders.length == 1 ? 'Buy' : 'Buys'}</h4>
                </Col>
              </Row>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetails;
