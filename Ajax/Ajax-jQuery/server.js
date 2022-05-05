// 1.import express
const express=require('express');

// 2.create obj
const app=express();

// 3.create rules
app.all('/jquery-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data={name:'Johnny'};
    response.send(JSON.stringify(data));
});

// 4.listen
app.listen(8000,()=>{
    console.log("8000 is listening")
});