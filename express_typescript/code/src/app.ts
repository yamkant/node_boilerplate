import express from "express"
import { Request, Response } from "express"

// create and setup express app
const app = express()
app.use(express.json())

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// register routes
app.get("/", function (req: Request, res: Response) {
  res.send('Hello World!');
})

// start express server
app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});