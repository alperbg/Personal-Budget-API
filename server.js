const express = require('express');
const app = express();

const PORT = 3000;


app.get('/',() => {
    res.send('Personal Budget')
})


app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})