import mongoose from "mongoose"

import { Schema } from "mongoose";



const dataSchema = new Schema(
    {
        "end_year": Number,
        "intensity": Number,
        "sector": String,
        "topic": String,
        "insight": String,
        "url": String,
        "region": String,
        "start_year": Number,
        "impact": String,
        "added": Date,
        "published": Date,
        "country": String,
        "relevance": Number,
        "pestle": String,
        "source": String,
        "title": String,
        "likelihood": Number
      }
      )



export default mongoose.model('Data', dataSchema);