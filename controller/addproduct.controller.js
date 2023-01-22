const allProduct = require('../models/addproduct.model')
const allProducts = {
    addProduct: async(req, res) =>{
        
        try {
            const product = new allProduct(req.body);
            await product.save()
            res.status(200).send(product)
           
        } 
         catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    categoryProductFind: async(req, res) =>{
        try {
           const categoryname = req.params.category
           const categoryProduct = await allProduct.find({category:categoryname}) 
           res.send(categoryProduct)
        } catch (error) {
            res.status(400).json({
                message: error.message
            }) 
        }
    },
   specificProductDetails: async(req,res)=>{
    try {
        const id = req.params.id
        const productDetails = await allProduct.find({_id:id})
        res.send(productDetails)
    } catch (error) {
        res.status(400).json({
            message: error.message
        }) 
    }
   }
 
}

module.exports = allProducts