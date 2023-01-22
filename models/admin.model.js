const  mongoose = require("mongoose");

const  sliderProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // required: true
    },
    price: {
        type: Number
    }
})

const sliderProduct = new mongoose.model('sliderProducts',sliderProductSchema)
module.exports = sliderProduct