import React,{useState} from 'react'
import { FiHeart, FiHome, FiShoppingBag } from 'react-icons/fi'
import { AiOutlineShop } from 'react-icons/ai'
import { Card, Col, Row, Tooltip } from 'reactstrap'
import success from './success.png'
import { Link } from 'react-router-dom'
function PaymentSuccess() {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const [tooltipOpen3, setTooltipOpen3] = useState(false);
    const [tooltipOpen4, setTooltipOpen4] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const toggle2 = () => setTooltipOpen2(!tooltipOpen2);
    const toggle3 = () => setTooltipOpen3(!tooltipOpen3);
    const toggle4 = () => setTooltipOpen4(!tooltipOpen4);
    return (
        <div id="mydiv123" className="py-5">
            <Card body id="mycard123" className="shadow-sm border border-0">
                <img src={success} id="thecardimg"/>
                <h4 className="text-center font-weight-bold">The product is on its way !!!</h4>
                <h6 className="text-center font-weight-bold">It will reach to you within 15 days </h6>
                <Row className="mx-5 my-3">
                    <Col md={2}>
                    </Col>
                    <Col md={2}>
                        <Link className="text-dark" to="/wishlist"><FiHeart id="successheart" title="Go to Wishlists"/></Link>
                    </Col>
                    <Col md={2}>
                        <Link className="text-dark" to=""><FiShoppingBag id="successbag" title="Go to my orders"/></Link>
                    </Col>
                    <Col md={2}>
                        <Link className="text-dark" ><AiOutlineShop id="successshop" title="Shop more"/></Link>
                    </Col>
                    <Col md={2}>
                        <Link className="text-dark" to="/"><FiHome id="successhome" title="Go to my home"/></Link>
                    </Col>
                    <Col md={2}>
                    </Col>
                    
                    
                </Row>
            </Card>
        </div>
    )
}

export default PaymentSuccess
