const mongoose = require('mongoose')
const { Schema  } = mongoose
const path  = require('path')

 const ImageSchema = new Schema({
    title: {type:String},
    description: {type:String },
    filemane:{type:String},
    views: {type:Number , default:0},
    likes:{type:Number , default:0},
    timestamp :{type:Date , default: Date.now}

})

ImageSchema.virtual ('uniqueId')
.get(function(){
    return this.filemane.replace(paht.extame(this.filemane), '')
})
module.exports = mongoose.model('Image', ImageSchema)