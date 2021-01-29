import React, { useEffect, useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Card ,Row,Col,Button, Input } from 'reactstrap'
import { UserContext } from '../App'
import {mylogo} from './paylogo.png'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import swal from 'sweetalert'
function Buy_Item() {
    const history = useHistory()
    const {id} = useParams()
    const { state, dispatch } = useContext(UserContext);
    const [product, setproduct] = useState([])
    let cost = 0
    let product_id = ''
    let product_name = ''
    let product_cost = ''
    let product_gender = ''
    let product_pic = ''
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let today = `${day}/${month}/${year}`
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let time = `${hour}:${minutes}`
    let uname = state.name
    const [number, setnumber] = useState(null)
    const [address, setaddress] = useState('')
    useEffect(() => {
      fetch('http://localhost:5000/prodetails/' + id , {
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt"),
              "Content-Type":"application/json"
          }
      }).then(res => res.json())
      .then(result => {
          console.log(result)
          setproduct(result)
          /* setcost({cost:result.cost}) */
      })
      .catch(error => {
          console.log(error)
      })
      
    }, [])
    for(let i = 0 ; i < product.length ; i++ ){
        cost = parseInt(product[i].cost)
        product_id = product[i]._id
        product_cost = product[i].cost
        product_name = product[i].p_name
        product_gender = product[i].gender
        product_pic = product[i].photo[0]
        cost = (cost/73) * 100
    }
    let user_id = state._id
    console.log(user_id)
    const makePayment = token => {
        const data = {token,cost}
        axios.post('http://localhost:5000/payment',data).then(res => {
            console.log(res)
            swal("Great !!!","Payment Success !!!", "success")
            fetch('http://localhost:5000/successpay',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    product_id,
                    user_id
                })
            }).then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
            fetch('http://localhost:5000/thepayment',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    pid: product_id,
                    pname: product_name,
                    pcost: product_cost,
                    pgender: product_gender,
                    ppic: product_pic,
                    uid: user_id,
                    date: today,
                    time,
                    uname,
                    number,
                    address
                })
            }).then(mydata => {
                console.log(mydata)
            }).catch(error => {
                console.log(error)
            })
        }).catch(err => {
            console.log(err)
        })
        history.push('/success')
    }
/*     const success = (data) => {
        let variables={
            cartDetail:UserContext.cartDetail,
            paymentData: data

        }
        fetch('/api/users/successBuy',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({

            })
        })
    }
    const transactionCancelled = () => {
        console.log('Transaction cancelled')
    }
    const transactionError = () => {
        console.log('Transaction Error')
    } */

    console.log(cost)
    return (
        <div id="mydiv123" className="py-5">
            {product.map(item => {
                return (
                    <Card body id="mycard123">
                    <Row>
                      <Col md={6}>
                        <img src={item.photo} id="productimage" className="rounded" />
                      </Col>
                      <Col md={6} >
                        <h4 className="ml-4 font-weight-bold">{item.p_name}</h4>
                        <p className="ml-4">for</p>
                        <h5 className="ml-4 font-weight-bold" style={{marginTop:"-7px"}}>{item.gender}</h5>
                        <p className="ml-4 mt-4" >Description:</p>
                        <p className="ml-4 font-weight-bold" style={{marginTop:"-15px"}}>{item.desc}</p>
                        <p className="ml-4">Cost:</p>
                        <h4 className="ml-4 font-weight-bold" style={{marginTop:"-15px"}}>₹{item.cost}</h4>
                        <Input id="buyinput" onChange={(e) => setnumber(e.target.value)} className="ml-4 mt-3" placeholder="Enter Your number..."/>
                        <Input id="buyinput" onChange={(e) => setaddress(e.target.value)} type="textarea" className="ml-4 mt-3" placeholder="Enter Your Address to deliver..."/>
                        <br/>
                        <StripeCheckout
                            stripeKey='pk_test_51HPrxMILil9SRE4acXT7BY2MEGSyOy6Zd7S6eHRm5m0KsSPsC4AoSKaKVPuCOrn3he0S8xTPQr4gdRC7iUEQ9bc5006IKeVsje'
                            token={makePayment}
                            name="buy"
                            amount={cost}
                            description={`Total ${cost}`}
                        ><Button color="primary" className="ml-4">Proceed to Payment</Button></StripeCheckout>
                      </Col>
                    </Row>
                </Card>
                )
            })}
           
        </div>
    )
}

export default Buy_Item
