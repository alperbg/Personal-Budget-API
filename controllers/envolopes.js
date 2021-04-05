const envolopes = require('../config/db')

const getAllEnvolopes = (req,res,next) => {
    res.status(200).send(envolopes)
}

const addSingleEnvolope = (req, res, next) => {
    const {envolope, budget, id} = req.body;

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
}
    
const getSingleEnvolope = (req,res,next) => {

    const {id} = req.params;
    const result = envolopes.filter(envolopeObj => envolopeObj.id === id)

    if (result.length === 0) {
        res.status(404).send({
            message : "Envolope Not Found"
        })
    }
    res.status(200).send(result[0]);
}

const updateSingleEnvolop = (req,res,next) => {

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
}


const deleteSingleEnvolop = (req,res,next) => {

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
}



module.exports = {
    getAllEnvolopes,
    addSingleEnvolope,
    getSingleEnvolope,
    updateSingleEnvolop,
    deleteSingleEnvolop
}