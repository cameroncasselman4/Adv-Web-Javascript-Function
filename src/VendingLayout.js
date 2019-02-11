import React, { Component } from "react";


class VendingLayout extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity
        }
       
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    updateQuantity(e) {
        /*if(this.state.quantity < 1) {
            this.setState({        
                quantity: this.state.quantity - 1
            });         
        }*/
        if(this.state.quantity > 1){
            this.setState({
                quantity: this.state.quantity - 1
            });  
        }
        else{
            alert(this.props.item.name + " out of stock... Refilling quantity to 10!")
            this.setState({
                quantity: 10
            });  
        }
         
    }
    render() {

        return (
            <div onClick={() => this.updateQuantity()} className="flex-child">
                <ul>
                    <li><h2>{this.props.item.name}</h2></li>
                    <li><h3>{"Quantity: " + this.state.quantity}</h3></li>
                </ul>
            </div>
        );
    }
}

export default VendingLayout;