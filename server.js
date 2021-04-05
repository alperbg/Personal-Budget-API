const dotenv = require('dotenv');
const express = require('express');
const envolopesRouter = require('./routes/envolopes')
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(express.json());

app.get('/',(req,res,next) => {
    res.send('Personal Budget')
})



app.use('/envolopes',envolopesRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})