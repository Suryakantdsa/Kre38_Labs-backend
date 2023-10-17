const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true   
    }
})

const Book=mongoose.model("books",bookSchema)
module.exports=Book