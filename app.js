const express = require('express')
const app = express()
const port  = process.env.port || 4000


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

    res.json({        
        slack_name: slack_name,
        track: track,
        current_day:current_day,
        utc_time: date.toISOString(),
        status_code: 200,
        github_repo_url:'https://github.com/aborkelvin/hngTasks',
        github_file_url:'https://github.com/aborkelvin/hngTasks/blob/main/app.js'
    })
})

app.listen(port,()=>{
    console.log('This task is running on port: ' + port )
})