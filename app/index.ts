import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/client";
//import { PrismaClient }from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => c.text("Hello World"));

app.get("/about", (c) => {
  return c.json({
    message: "Pirapat Papat",
  });
});

app.get("/profile", async (c) => {
    //login
  const profiles = prisma.profile.findMany();
  return c.json(profiles);
});

export default app;
