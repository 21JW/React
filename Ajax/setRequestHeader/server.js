// 1.import express
const express=require('express');

// 2.create obj
const app=express();

// 3.create rules
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello Ajax Get')
});

// 3.create rules
// app.all can accept all kinds of requests
app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('Hello Ajax Post')
});

// 4.listen
app.listen(8000,()=>{
    console.log("8000 is listening")
});