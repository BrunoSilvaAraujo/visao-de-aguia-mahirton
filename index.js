const express = require('express')
const app = express()
app.use(express.static('page'))
const port = 3000

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/page/index.html')
})

app.listen(port, function(){
    console.log('app rodando na port ' + port)
})
