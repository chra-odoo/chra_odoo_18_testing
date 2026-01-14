import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Example extends Component {
    static template = "chra_sale.Example";
}

registry.category("view_widgets").add("example", { component: Example });