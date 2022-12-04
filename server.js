const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors())

//Router
app.use("/", express.static(path.resolve(path.join(__dirname, ""))));

app.use(require('./router/route'))


const dbURI = "mongodb+srv://saqib:saqib@cluster0.wdqfa.mongodb.net/crud-operation?retryWrites=true&w=majority"

mongoose.connect(dbURI)
    .then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err)
    });


// app.get('/',(req,res)=>{
//     res.json({msg:"create server successfully"})
// })
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server is running on port', PORT);
})