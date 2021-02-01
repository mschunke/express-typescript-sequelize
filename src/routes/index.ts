import express from 'express';
import { Request, Response } from 'express'

import HelloRoutes from './hello'

const router = express.Router();

router.get('/', (req, res) => {
  console.log("HI")
  res.send("OK")
})

router.use('/hello', HelloRoutes)

export default router