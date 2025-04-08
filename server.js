const express = requrie('express');
const mongoose = requrie('mongoose');

const app = express();
const PORT = process.env.PORT = 8080;

app.get('/', (req,res)=>{
    res.send('server connected succesfully');
    const db = mongoose.conection;

})