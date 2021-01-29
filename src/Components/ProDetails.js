import React, { useEffect, useState, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FiAlertTriangle, FiHeart } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import { UserContext } from "../App";
function ProDetails() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/prodetails/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addthis = (id) => {
      fetch('http://localhost:5000/wishlist',{
          method:'PUT',
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt"),
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
            proid:id
          })
      }).then(res => res.json())
      .then(result => {
          console.log(result)
          dispatch({type:'UPDATE',payload:{wishlist:id}})
          localStorage.setItem("user",JSON.stringify(result))
         window.location.reload()
      })
      .catch(err => {
          console.log(err)
      })
  }
  

  return (
    <div id="mydiv123" className="py-5">
      {product.map((item) => {
        return (
          <Card body id="mycard123">
            <Row>
              <Col md={4}>
                <img src={item.photo} id="productimage" className="rounded" />
              </Col>
              <Col md={4} className="">
                <h2 className="ml-4 font-weight-bold">{item.p_name}</h2>
                <p className="ml-4">for</p>
                <h5 className="ml-4 font-weight-bold">{item.gender}</h5>
                <p className="ml-4 mt-4">Description:</p>
                <p className="ml-4 font-weight-bold">{item.desc}</p>
                <p className="ml-4">Cost:</p>
                <h4 className="ml-4 font-weight-bold">₹{item.cost}</h4>
              </Col>
              <Col md={4}>
                  {item.wishlist.includes(state._id) ? <FaHeart id="selected" className="mt-4 mb-4"/> : <FiHeart className="addwishlist my-4" onClick={() => addthis(item._id)} title="Add to wishlist"/>}
                  <hr/>
                   <Link to={'/buy/'+item._id}><MdAddShoppingCart className="addwishlist my-4 text-dark" title="Buy Item"/></Link>
                  <hr/>
                  <FiAlertTriangle className="addwishlist my-4" title="Report this Product"/>
              </Col>
            </Row>
          </Card>
        );
      })}
    </div>
  );
}

export default ProDetails;
