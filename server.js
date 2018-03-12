const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hola Món!'))

app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))
