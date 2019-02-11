import React from "react";
import ReactDOM from "react-dom";
import VendingMachine from "./VendingMachine";
import "./index.css";

const destination = document.querySelector("#container");

//define the data bank to pass into components
let vendingItems = [
    {
        name: "Doritos",
        tag: "1A",
        quantity: "10"
    },
    {
        name: "Cheeze-it",
        tag: "1B",
        quantity: "10"
    },
    {
        name: "Poptart",
        tag: "1C",
        quantity: "10"
    },
    {
        name: "Lays",
        tag: "2A",
        quantity: "10"
    },
    {
        name: "Donuts",
        tag: "2B",
        quantity: "10"
    },
    {
        name: "Crackers",
        tag: "2C",
        quantity: "10"
    },
    {
        name: "Gummies",
        tag: "3A",
        quantity: "10"
    },
    {
        name: "Pretzels",
        tag: "3B",
        quantity: "10"
    },
    {
        name: "Ritz",
        tag: "3B",
        quantity: "10"
    }
];


ReactDOM.render(
    <div>
        <VendingMachine  items={vendingItems}/>
    </div>,
    destination
);

