// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

let d = new Date()
usa.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1]
india.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1]
china.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1]