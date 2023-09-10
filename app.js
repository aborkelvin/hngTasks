const express = require('express')
const app = express()
const port  = 4000


app.get('/',(req,res)=>{
    res.send('Hello, Welcome to Home')
})

app.get('/api',(req,res)=>{
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    res.send(`Hello ${slack_name}, Welcome to ${track} track`)
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    const current_day = weekday[date.getDay()]

    res.json({
        message: `Hello ${slack_name}, Welcome to ${track} track`,
        slack_name: slack_name,
        track: track,
        current_day:current_day,
        status_code: 200
    })
})

app.listen(port,()=>{
    console.log('This task is running on port: ' + port )
})