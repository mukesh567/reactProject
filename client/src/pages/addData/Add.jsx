import { useState } from 'react';
import './add.scss'
import { Link, useNavigate } from "react-router-dom"

const Add = () => {

    //states define 
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [skuNumber, setSkuNumber] = useState();
    const [avQTY, setAvQTY] = useState("");
    const navigate = useNavigate();


    const addProduct = async () => {
        if (name && price && skuNumber && avQTY) {
            let result = await fetch('http://localhost:5000/add', {
                method: 'post',
                body: JSON.stringify({
                    name, desc, price, discount, skuNumber, avQTY
                }),

                headers: {
                    "Content-Type": "application/json"
                }
            })

            result = await result.json();
            console.log(result);
            navigate('/');
            alert("You have successfully add product at MongoDb Database.")
        }

        else {
            alert("Enter valid details!");
        }
    }



    return (
        <div className="add">
            <div className="container">
                <h1>ADD A PRODUCT</h1>
                <div className="sections">

                    <div className="info">

                        <div className="headImg">
                            <img src="img/headP.jpg" alt="" />
                        </div>

                        <div className="allImg">
                            <img src="img/headP1.jpg" alt="" />
                            <img src="img/headP2.jpg" alt="" />
                            <img src="img/headP3.jpg" alt="" />
                            <img src="img/headP4.jpg" alt="" />

                            <Link to="/add">
                                <img src="img/plus.png" alt="" />
                            </Link>
                        </div>

                        <button onClick={addProduct}>Save</button>
                    </div>

                    <div className="details">
                        <label htmlFor=""></label>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor=""></label>
                        <textarea name="" id="" placeholder="Description" cols="30" rows="10"
                            value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>

                        <label htmlFor=""></label>
                        <input type="text" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />

                        <label htmlFor=""></label>
                        <input type="text" placeholder='Discount' value={discount} onChange={(e) => setDiscount(e.target.value)} />

                        <label htmlFor=""></label>
                        <input type="number" placeholder='SKU Number (ABC12345)' value={skuNumber} onChange={(e) => setSkuNumber(e.target.value)} />

                        <label htmlFor=""></label>
                        <input type="text" placeholder="Available Qty" value={avQTY} onChange={(e) => setAvQTY(e.target.value)} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;