import React, { useState } from 'react'


const InputItems = props => {




    const [item, setItem] = useState('')
    const [unit, setUnit] = useState('')
    const [qty, setQty] = useState('')


    const onFormSubmit = e => {

        const newarray = [
            {
                item, unit, qty
            }
        ]
        e.preventDefault()
        props.addItems(newarray)
        setItem('')
        setUnit('')
        setQty('')
    }

    return (

        <form onSubmit={onFormSubmit}>

            <input type="text" onChange={(e => setItem(e.target.value))} value={item} />
            <input type="text" onChange={(e => setUnit(e.target.value))} value={unit} />
            <input type="number" onChange={(e => setQty(e.target.value))} value={qty} />
            <button>Add to Cart</button>

        </form>
    )
}

export default InputItems