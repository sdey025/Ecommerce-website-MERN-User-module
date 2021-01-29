import React from 'react'
import { Row,Col,Input,Button } from 'reactstrap'
import './nav.css'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import { FiFacebook, FiHeart } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
function Footer() {
    return (
        <div id="footer">
            <Row>
                <Col md={3}>
                    <Router><Link><h5 className="text-light text-center font-weight-bold">Categories</h5></Link>
                    <Link><p className="text-center text-light mt-4">Women</p></Link>
                    <Link><p className="text-center text-light">Men</p></Link>
                    <Link><p className="text-center text-light">Shoes</p></Link>
                    <Link><p className="text-center text-light">Watches</p></Link></Router>
                </Col>
                <Col md={3}>
                    <h5 className="text-light text-center font-weight-bold">Help</h5>
                    <Router><Link><p className="text-light text-center mt-4">Track Order</p></Link>
                    <Link><p className="text-center text-light">Returns</p></Link>
                    <Link><p className="text-center text-light">Shipping</p></Link>
                    <Link><p className="text-center text-light">FAQs</p></Link></Router>
                </Col>
                <Col md={3}>
                    <h5 className="text-light text-center font-weight-bold">Get in Touch</h5>
                    <p className="text-center text-light mt-4">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <Row>
                    <FiFacebook className="ml-auto mr-3 mt-2" id="fb" style={{fontSize:'25px'}}/>
                    <FiTwitter className="text-center mr-3 mt-2" id="tw" style={{fontSize:'25px'}}/>
                    <FiInstagram className="mr-auto mt-2" id="in" style={{fontSize:'25px'}}/>
                    </Row>
                </Col>
                <Col md={3}>
                    <h5 className="text-light text-center font-weight-bold">Newsletter</h5>
                    <Input className="mx-auto mt-4" placeholder="Enter Your Email..." style={{width:'70%'}}/>
                    <Button className="mx-auto mt-3 d-flex mybtn">Subscribe</Button>
                </Col>
            </Row>
            <Row className="d-flex">
            <p className="text-center text-light mt-4 mx-auto font-weight-bold">Copyright ©2020 All rights reserved | This template is made with <FiHeart style={{color:'red'}}/> by Shivasish Dey</p>
            </Row>
{/*             <Link to="/success">success</Link> */}
        </div>
    )
}

export default Footer
