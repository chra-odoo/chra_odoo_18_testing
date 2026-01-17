import { registry } from "@web/core/registry";

registry.category("services").add("myService", {
    dependencies: ["notification"],
    start(env, { notification }) {
        setInterval(() => {
            notification.add("myService is running");
        }, 5000);
    },
});