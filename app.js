const express = require('express');
const path = require('path');

const app = express();
// console.log(__dirname);
const staticPath = path.join(__dirname,'/public');
// console.log(staticPath);
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(3000,()=>{
    console.log("listening to port 3000");
})