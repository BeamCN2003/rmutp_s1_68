import { serve } from "@hono/node-server";
import app from "./index";

serve(app,(info)=>{
    console.log(`Sever is runnig on http://localhost:${info.port}`);
});