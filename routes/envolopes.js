const express = require('express');
const envolopeRouter = express.Router()

const{ 
        getAllEnvolopes,
        addSingleEnvolope,
        getSingleEnvolope,
        updateSingleEnvolop,
        deleteSingleEnvolop
    } = require('../controllers/envolopes')

envolopeRouter.get('/', getAllEnvolopes);
envolopeRouter.post('/',addSingleEnvolope)
envolopeRouter.get('/:id',getSingleEnvolope)
envolopeRouter.put('/:id',updateSingleEnvolop)
envolopeRouter.delete('/:id',deleteSingleEnvolop)







module.exports = envolopeRouter
