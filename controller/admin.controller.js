const sliderProduct = require('../models/admin.model')
const sliderProducts = {
    headerProduct: async(req, res) =>{
        
        try {
            const product = new sliderProduct(req.body);
            await product.save()
            res.status(201).send(product)
           
        } 
         catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    showProduct: async(req, res) =>{
        try {
            const getProduct = await sliderProduct.find({})
            res.send(getProduct)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    editProduct: async(req, res) =>{
        try {
            const _id = req.params.id
            const product = await sliderProduct.findByIdAndUpdate(_id, req.body, { new: true })
            res.send(product)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
}

module.exports = sliderProducts