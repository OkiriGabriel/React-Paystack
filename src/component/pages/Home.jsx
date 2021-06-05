import React, {useState, useEffect}from 'react'
import { PaystackButton } from 'react-paystack'

const Home = () => {

    const publicKey = "pk_test_14c70a8d3557f0cb2f664cbd622780a7f3274d2f"
    const amount = 1000000
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
      onClose: () => alert("Wait! Don't leave :("),
    }
  

    return (
        <>
            <div className="App">
                        
                <div className="container">
                    <div className="item">
                    <div className="overlay-effect"></div>
                    <img
                        className="item-image"
                        src="../../images/guitar.jpg"
                        alt="product"
                    />
                    <div className="item-details">
                        <p className="item-details__title">Guitar</p>
                        <p className="item-details__amount">NGN{amount}</p>
                    </div>
                    </div>
                    <div className="checkout-form">
                <div className="checkout-field">
                    <label>Name</label>
                    <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Email</label>
                    <input
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Phone</label>
                    <input
                    type="text"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <PaystackButton className="paystack-button" {...componentProps} />
                </div>
                </div>


            </div>  
        </>
    )
}

export default Home
