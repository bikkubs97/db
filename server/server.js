import dotenv from 'dotenv';
import Data from './model.js'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

import  express from "express"

import cors from 'cors'

import mongoose from "mongoose"



const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => {
  console.log('connected to mongoose!!')
})




app.get('/data', (req, res) => {
    Data.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  
  




app.listen(3000)