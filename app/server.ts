import { serve } from "@hono/node-server";
import app from "./index.js";

serve(app,(info)=>{
    console.log(`Sever is runnig on localhost:${info.port}`);
});