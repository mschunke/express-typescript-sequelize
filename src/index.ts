import express, { Application, Request, Response } from 'express';
import Routes from './routes'

const app: Application = express();

app.use(Routes)

app.listen(3000, () => {
  console.log("Server Started")
})

export default app