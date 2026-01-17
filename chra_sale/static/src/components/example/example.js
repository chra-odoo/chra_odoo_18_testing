import { Component, useState, useSubEnv } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
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

    // This method is called when the component is mounted.
    setup() {
        useSubEnv({
            data: 'info_from_subenv',
        });
        this.message = "Hello!";
        this.state = useState({counter: 0});
        this.orm = useService("orm");
    }

    // This method is called when the button is clicked.
    alertMessage() {
        alert(this.message);
    }

    incrementCounter() {
        this.state.counter++;
    }
    decrementCounter() {
        this.state.counter--;
    }
    resetCounter() {
        this.state.counter = 0;
    }

    async createLead() {
        const [leadId] = await this.orm.create("crm.lead", [{
            name: "Lead 1",
            email_from: "lead1@example.com",
            phone: "1234567890",
        }]);
        console.log("Lead created with ID:", leadId);
        
        // To get the full lead object, read it back
        const leads = await this.orm.read("crm.lead", [leadId], ["name", "email_from", "phone"]);
        console.log("Lead object:", leads[0]);
    }
}

registry.category("view_widgets").add("example", { component: Example });