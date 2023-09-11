const express = require('express')
const app = express()
const port  = process.env.port || 4000
const format = require('date-fns/format')

app.get('/',(req,res)=>{
    res.send('Hello, Welcome to Home')
})

app.get('/api',(req,res)=>{
    // Get query string from url
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    //res.send(`Hello ${slack_name}, Welcome to ${track} track`)
    
    // Get current day in full name
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    const current_day = weekday[date.getDay()]

    // Expected utc time format : 2023-09-11T19:37:54Z
    const utc_time = format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'")

    res.json({        
        slack_name: slack_name,
        track: track,
        current_day:current_day,
        utc_time: utc_time,
        status_code: 200,
        github_repo_url:'https://github.com/aborkelvin/hngTasks',
        github_file_url:'https://github.com/aborkelvin/hngTasks/blob/main/app.js'
    })
})

app.listen(port,()=>{
    console.log('This task is running on port: ' + port )
})