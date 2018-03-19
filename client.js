const express = require('express')
const app = express()
app.use(express.static('public'))



app.listen(3200, () => console.log('Client escoltant el port 3200!'))
