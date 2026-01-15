import { Component, onWillStart, onWillDestroy } from "@odoo/owl";

export class Child extends Component {
    static template = "chra_sale.Child";
    static props = {
        title: { type: String },
        items: { type: Array },
        slots: { type: Object },
        counter: { type: Number },
    };

    setup() {
        onWillStart(() => {
            console.log("Child component will start!");
        });
        onWillDestroy(() => {
            console.log("Child component will destroy!");
        });
    }
}