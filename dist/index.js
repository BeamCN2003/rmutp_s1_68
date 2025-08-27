import { Hono } from "hono";
const app = new Hono();
app.get("/", (c) => c.text("Hello World"));
app.get("/about", (c) => {
    return c.json({
        message: " Pirapat Papat"
    });
});
export default app;
