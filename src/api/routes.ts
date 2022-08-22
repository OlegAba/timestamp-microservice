import { Router } from "express";

const apiRoute = Router()

apiRoute.route('/:date').get((req, res) => {
  const date = new Date(req.params.date)
  console.log(date.toDateString())

  res.json({ msg: 'temp'})
});

// const validateUnixDate = (timestamp) => {
//   const date = new Date()
// }

export default apiRoute