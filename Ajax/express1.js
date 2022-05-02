// 1.import express
const express=require('express');

// 2.create obj
const app=express();

// 3.create rules
app.get('/',(request,response)=>{
    response.send('Hello Express')
});

// 4.listen
app.listen(8000,()=>{
    console.log("8000 is listening")
})