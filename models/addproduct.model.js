const  mongoose = require("mongoose");

const  addProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category:{
        type: String,  
    },
    image: {
        type: String,
        // required: true
    },
    details:{
        type: String,
    },
    price: {
        type: Number
    }
})

const addProduct = new mongoose.model('addProducts',addProductSchema)
module.exports = addProduct