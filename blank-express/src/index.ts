import cors from "cors"
import express, { Request, Response } from "express"
import helmet from "helmet"

const app = express()
app.use(cors())
app.use(helmet())
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ statusCode: 200, message: "Hello, World!" })
})
app.listen(3000, () => {
  console.log("The server is Running at Port 3000")
})
