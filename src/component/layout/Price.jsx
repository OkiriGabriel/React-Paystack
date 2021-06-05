import React from 'react'

const price = (amount) => {
    return (
        <>
        <div className="container">
            <div className="item">
                <img />
                <div className="item-details">
                    <p>Dancing Shoes</p>
                    <p>{amount}</p>
                </div>
            </div>
        </div>  
        </>
    )
}

export default price
