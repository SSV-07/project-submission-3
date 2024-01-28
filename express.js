const express = require("express");

const app = express();

app.use(express.json());

const port = 5502;

const toDoList = ["item 1", "item 2", "item 3", "item 4"]; 



app.get("/todos",(req, res)=>{
    res.status(200).send(toDoList)
})


app.post("/todos", (req,res)=>{
    let newDoItem = req.body.item;
    toDoList.push(newDoItem);
    res.status(201).send({
        message: "The task was added sucessfully"
    })
})

app.delete("/todos", (req,res)=>{
var itemToDelete = req.body.item;

toDoList.find((elem, index)=>{
    if(elem === itemToDelete){
        toDoList.splice(index, 1);
    }
});
res.status(204).send({
    message: `Deleted item ${req.body.item}`
})
})


app.all("/todos", (req, res)=>{
    res.status(501).send({
        message: "Not yet implemented"
    })
})

app.all("*",(req,res)=>{
    res.status(404).send({
        message: "default url"
    })
})

app.listen(port, ()=>{
    console.log(`NodeJs with Express started running sucesfuly on port ${port}`)
})