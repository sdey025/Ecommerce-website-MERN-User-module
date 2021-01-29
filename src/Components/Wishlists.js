import React, {useEffect, useState, useContext} from 'react'
import { Card, Col, Row } from 'reactstrap'
import { MdAddShoppingCart } from "react-icons/md";
import { UserContext } from "../App";
import './nav.css'
import { FiX, FiXCircle } from 'react-icons/fi';
import wish from './wish.png'
import { Link } from 'react-router-dom';
function Wishlists() {
    const [products, setproducts] = useState([])
    const { state, dispatch } = useContext(UserContext);
    let count = 0
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
          
          const mycount = () => {
            products.map(item => {
                console.log(item.wishlist)
            })
            return count
          } 
          mycount();
      }, []);
      
      console.log(count)
      const remove = (id) => {
        fetch('http://localhost:5000/nowishlist',{
            method: "PUT",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('jwt'),
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                proid:id
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem("user",JSON.stringify(data))
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
      }
    return (
        <div id="mydiv123" className="py-5">
            <Card body id="mycard123">
                {  
                    products.map(item => {
                        if(item.wishlist.includes(state._id)){
                            return (
                                <Row>
                                <Col md={4}>
                                    <img src={item.photo} id="myimg111" className="my-4"/>
                                </Col>
                                <Col md={4}>
                                    <h4 className="ml-4 mt-4">{item.p_name}</h4>
                                    <p className="ml-4">for</p>
                                    <h5 className="ml-4 font-weight-bold">{item.gender}</h5>
                                    <p className="ml-4 mt-4">Description:</p>
                                    <p className="ml-4 font-weight-bold">{item.desc}</p>
                                    <p className="ml-4">Cost:</p>
                                    <h5 className="ml-4 font-weight-bold">₹{item.cost}</h5>
                                </Col>
                                <Col md={4}>
                                    <Link className="text-dark " to={"/buy/"+item._id}><MdAddShoppingCart className="addwishlist1" title="Add to Cart"/></Link>
                                    <FiXCircle className="remove" onClick={() => remove(item._id)} title="Remove from wishlist"/>
                                </Col>
                            </Row>
                            )
                        }       
                    }) 
                    }
            </Card>
        </div>
    )
}

export default Wishlists
