// 1.import express
const express=require('express');

// 2.create obj
const app=express();

// 3.create rules
app.all('/jsonp-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data={
        name:'Johnny'
    };
    let str=JSON.stringify(data);
    // handle is the function provided from HTML
    response.end(`handle(${str})`);
});

// 4.listen
app.listen(8000,()=>{
    console.log("8000 is listening")
});