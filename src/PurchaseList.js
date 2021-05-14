import React from 'react'

const PurchaseList = (props) => {

    return (
        <div>
            <ul>
                <li>
                    Item: {props.list.item} | Unit: {props.list.unit} | Quantity: {props.list.qty}
                </li>
                <button>Purchase</button>
                <button>Remove from Cart</button>
                <hr />
            </ul>
        </div>

    )
}

export default PurchaseList