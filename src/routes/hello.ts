import { Request, Response } from 'express'
import express from 'express'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Hi")
})

router.get('/world', (req: Request, res: Response) => {
  res.send("Hello world!")
})

export default router