//The vending machine component will reference other components and bring everything together
//other componets include: search bar component, table component
import React, { Component } from "react";
import VendingLayout from "./VendingLayout";

class VendingMachine extends Component {
        //parse json and store each index into a component
    renderData() {
        let renderData = [];
        for(var i=0; i<this.props.items.length; i++){
            renderData.push(<VendingLayout key={i+this.props.items[i].name} item={this.props.items[i]}/>)
        }
        return renderData;
    }
    
    render() {
        return (
            <div>
                <div id="flex-container">
                    {/*this.props.items.map((vendingItems, index) => {
                        return <div>
                            <h1>{vendingItems.name}</h1>
                        </div>
                    })*/}
                    {this.renderData()}
                </div>
            </div>
        );
    }
}

export default VendingMachine;