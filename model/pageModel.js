const mongoose = require('mongoose')

const Schema = mongoose.Schema



const PostSchema = new Schema({
      post : {
        type: String,
        required: true,
        min :[25, "Post should be minimum 25 character "]
      },
    } , 
  {timestamps: true}
  )

const Postmodel =mongoose.model('DBPost',PostSchema)

module.exports= Postmodel
