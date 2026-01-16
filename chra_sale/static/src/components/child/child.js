import { Component, onWillStart, onWillDestroy, useRef } from "@odoo/owl";

export class Child extends Component {
    static template = "chra_sale.Child";
    static props = {
        title: { type: String },
        items: { type: Array },
        slots: { type: Object },
        counter: { type: Number },
    };

    setup() {
        this.myInput = useRef("myInput");
        onWillStart(() => {
            console.log("Child component will start!");
        });
        onWillDestroy(() => {
            console.log("Child component will destroy!");
        });
    }

    focusMyInput() {
        this.myInput.el.focus();
    }
}