import express from 'express';
import cors from 'cors'

const port=5000
const app=express()
app.use(cors())

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log('listening on',port);
})