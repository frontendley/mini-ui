import express from "express"
import cors from "cors"
import multer from "multer"

const app = express()
const upload = multer()

app.use(cors())

app.post("/upload", upload.single("file"), (req, res) => {

  res.status(200).json({
    code: 200,
    msg: "success"
  })
})

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log("server had running http://127.0.0.1:8000")
})
