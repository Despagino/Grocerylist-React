import React from 'react'
import PurchaseList from './PurchaseList'
import InputItems from './Input'


const Grocery = (props) => {



    const RenderedItems = props.items.map((item, index) => {
        return (
            <PurchaseList list={item} key={index} />
        )
    })




    return (
        <div>
            {RenderedItems}
            <InputItems arrayitems={props.items} addItems={props.addItems} />
        </div >
    )

}


export default Grocery