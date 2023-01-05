import express from "express";
import bodyParser from "body-parser"
import userRouter from "./routes/users"


const app = express()

app.use(bodyParser.json())

app.use("/api",userRouter)

app.get("/", function(req,res){
    res.json({
        name : "John",
        age : 20
    })
})


app.listen(3000, function(){
    console.log("Server auf Port 3000");
})