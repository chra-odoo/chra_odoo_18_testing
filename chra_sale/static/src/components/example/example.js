import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardWidgetProps } from "@web/views/widgets/standard_widget_props";
import { Child } from "../child/child";

export class Example extends Component {
    static template = "chra_sale.Example";
    static components = {
        Child,
    };
    static props = {
        ...standardWidgetProps, // This includes the props for the standard widget
        "*": true, // Allow any additional props to be passed through
    };
}

registry.category("view_widgets").add("example", { component: Example });