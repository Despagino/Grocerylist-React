import React from 'react'
import Grocery from './Grocery'


class App extends React.Component {

    state = {
        items:
            [
                {
                    item: 'orange',
                    unit: 'lbs',
                    qty: '54',
                    isPurchased: false
                }, {
                    item: 'milk',
                    unit: 'lbs',
                    qty: '3',
                    isPurchased: false
                }, {
                    item: 'apple',
                    unit: 'lbs',
                    qty: '3',
                    isPurchased: false
                }
            ]
    }


    addItems = (item) => {
        this.setState({
            items:
                this.state.items.concat(
                    item
                )
        })
    }


    render() {
        return (
            <div>
                <h1>BUY GROCERIES HERE</h1>
                <Grocery items={this.state.items} addItems={this.addItems} />
            </div>
        )
    }

}




export default App