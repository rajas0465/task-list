import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { fetchBlogs } from "./task.js";

const app = express();
const port = 3001;

app.use(express.json());

if (process.env.DEVELOPMENT) {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/blogs", async (req, res) => {
  try {
    const blogs = await fetchBlogs();

    res.send(blogs.Items);
  } catch (err) {
    res.status(400).send(`Error fetching blogs: ${err}`);
  }
});


if (process.env.DEVELOPMENT) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export const handler = serverless(app);