import React, {useState,useContext} from 'react'
import { Button, Card, Input, Label } from 'reactstrap'
import './nav.css'
import { UserContext } from "../App";
import swal from 'sweetalert'
function Sell() {
    const { state, dispatch } = useContext(UserContext);
    const [p_name, setp_name] = useState('')
    const [photo, setphoto] = useState('')
    const [desc, setdesc] = useState('')
    const [gender, setgender] = useState('')
    const [cost, setcost] = useState('')
    const [url, seturl] = useState('')
    const [postedby, setpostedby] = useState(state._id)
    const submit = () => {
        if(!p_name || !photo|| !desc || !gender || !cost || !postedby){
            swal("Oops !!!","Please fill each fields !!!", "error");
        }
        else{
            const data = new FormData()
            data.append("file",photo)
            data.append("upload_preset","mycommerce")
            data.append("cloud_name","dfgvl0a9x")
            fetch('https://api.cloudinary.com/v1_1/dfgvl0a9x/image/upload',{
                method: "POST",
                body:data
            }).then(res => res.json())
            .then(data => {
                seturl(data.url)
                fetch('http://localhost:5000/sell',{
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        p_name,
                        desc,
                        gender,
                        photo:data.url,
                        cost,
                        postedby
                    })
                }).then(res => res.json())
                .then(result => {
                    swal("Great !!!",'Product Added successfuly','success')
                    console.log(result)
                    /* window.location.reload() */
                })
                .catch(err => {
                    swal("Oops !!!","We encountered an error",'error')
                    console.log(err)
                })
            })
        }
    }
    return (
        <div id="selldiv">
            <Card body className="shadow-sm border-0" id="sellcard">
                <h2 className="mx-auto font-weight-bold ">Upload Product</h2>
                <Label id="sellabel" className="mt-4">Product Name: </Label>
                <Input className="mb-4  " onChange={(e) => setp_name(e.target.value)} placeholder="Enter Product details" id="sellinp"/>
                <Label id="sellabel">Photo:</Label>
                <Input className="mb-4 " onChange={(e) => setphoto(e.target.files[0])} type="file" id="sellinp"/>
                <Label id="sellabel">Description:</Label>
                <Input className="mb-4 " onChange={(e) => setdesc(e.target.value)} type="textarea" placeholder="Enter Product details" id="sellinp"/>
                <Label id="sellabel">Gender:</Label>
                <Input type="select" onChange={(e) => setgender(e.target.value)} className="mb-4 " id="sellinp">
                    <option>Select an option</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                    <option value = "Kids">Kids</option>
                </Input>
                <Label id="sellabel">Product Cost:</Label>
                <Input className="mb-4 " onChange={(e) => setcost(e.target.value)} placeholder="Enter product cost" id="sellinp"/>
                <Button color="primary" onClick={submit} id="sellbut">Add Product</Button>
            </Card>
        </div>
    )
}

export default Sell
