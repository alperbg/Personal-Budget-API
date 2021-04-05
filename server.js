const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/',(req,res,next) => {
    res.send('Personal Budget')
})


let envolopes = [
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

    const {id} = req.params;
    const result = envolopes.filter(envolopeObj => envolopeObj.id === id)

    if (result.length === 0) {
        res.status(404).send({
            message : "Not Found"
        })
        console.log('result boş hata mesajı')
    }
    res.status(200).send(result[0]);
})

app.put('/envolopes/:id',(req,res,next) => {

    const {id} = req.params;

    const envolopeIndex = envolopes.findIndex(envolopeObj => envolopeObj.id === id)

    if (envolopeIndex === -1) {
        res.status(404).send({
            message : "Not Found"
        })
    }

    const information = req.body;

    envolopes[envolopeIndex] = information
    
    console.log(envolopes)
    res.status(200).send(envolopes);
})

app.delete('/envolopes/:id',(req,res,next) => {

    const {id} = req.params;
    const result = envolopes.filter(envolopeObj => envolopeObj.id !== id)

    if (result.length === envolopes.length) {
        res.status(404).send({
            message : "Not Found"
        })
        return
    }
    envolopes = Array.from(result);

    console.log(envolopes)
    res.status(200).send({
        status : 200,
        message : "envolope deleted successfully"
    });
})



app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})