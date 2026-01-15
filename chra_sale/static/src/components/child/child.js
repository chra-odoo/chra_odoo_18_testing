import { Component } from "@odoo/owl";

export class Child extends Component {
    static template = "chra_sale.Child";
    static props = {
        title: { type: String },
        items: { type: Array },
        slots: { type: Object },
    };
}