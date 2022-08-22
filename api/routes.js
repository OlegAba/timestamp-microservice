import { Router } from "express";

const apiRoute = Router()

apiRoute.route('/hello').get((req, res) => {
  res.json({ greeting: 'hello API' });
});

apiRoute.route('/:date').get((req, res) => {
  const date = new Date(req.params.date * 1000)
  console.log(date.toDateString())

  res.json({ msg: 'temp'})
});

export default apiRoute