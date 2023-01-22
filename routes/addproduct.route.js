const express = require('express')
const router=express.Router()
const allProduct = require('../controller/addproduct.controller')
router.post('/addproducts', allProduct.addProduct)
router.get('/addproducts/:category', allProduct.categoryProductFind)
router.get('/addproduct/:id', allProduct.specificProductDetails)

module.exports = router