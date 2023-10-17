const express=require("express")
const app =express()
const cors=require("cors")
const mongoose=require("mongoose")
const dotenv = require("dotenv");
const Book=require("./Models/Book")

dotenv.config(); 

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

mongoose.connect(uri)
.then(()=>{console.log("connected to db successfully")})

app.use(express.json())
app.use(cors())

app.get("/", async (req, resp) => {
    try {
        let books = await Book.find();
        if (books.length === 0) {
            resp.send({ result: "no book data found" });
        } else {
            resp.send(books);
        }
    } catch {
        resp.status(400).json({ message: "error occurred while fetching books" });
    }
});

app.post("/add", async (req, resp) => {
    try {
        let newBook = new Book(req.body)
        let result = await newBook.save();
        resp.send(result)
        
    }
    catch {
        resp.status(400).json({ message: "something went wrong pleae cheek the inputdata once" })
    }
})

app.delete("/book/:id", async (req, resp) => {
    try {
        let result = await Book.deleteOne({ _id: req.params.id })
        resp.send(result)
    }
    catch {
        resp.status(404).json({ message: "Unable to delete the Book..! Book not found" })
    }
})

app.listen(port,()=>{console.log("app is running on" ,port)})