const express = require('express');
const app = express();
// require('dotenv').config();
const mongoose = require('mongoose');

app.get("/", (req, res) => {
    res.send("Home");
})

// mongoose.connect(process.env.ATLAS_URL)
mongoose.connect("mongodb+srv://hamza1:hamzamhq@clusteraptech.ipf2p.mongodb.net/mernproject?retryWrites=true&w=majority&appName=Clusteraptech")
.then(()=>{
    app.listen(3005, ()=> {
        console.log("Server Start")
    });
}).catch((error)=>{
    console.log(error)
})

// app.listen(3005, ()=> {
//     console.log("Server Start")
// });