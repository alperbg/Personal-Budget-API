const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/',(req,res,next) => {
    res.send('Personal Budget')
})


const envolopes = [
    {   
        'id':'1',
        'envolope': 'tax', 
        'budget': 300
    },
    {
        'id':'2',
        'envolope': 'food', 
        'budget': 800
    },
]

app.post('/envolopes',(req,res,next) => {
    const {envolope, budget,id} = req.body;

    envolopes.push({
        id: id,
        envolope: envolope,
        budget: budget
    });

    console.log(envolopes);

    res.status(200).send({
        id: id,
        envolope: envolope,
        budget: budget
    });
});

app.get('/envolopes',(req,res,next) => {

    res.status(200).send(envolopes);
});

app.get('/envolopes/:id',(req,res,next) => {
    console.log(req.params.id)

    const {id} = req.params;
    result = envolopes.filter(envolopeObj => envolopeObj.id === id)

    if (result.length === 0) {
        res.status(404).send({
            message : "Not Found"
        })
        console.log('result boş hata mesajı')
    }
    console.log(result)
    res.status(200).send(result[0]);
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})