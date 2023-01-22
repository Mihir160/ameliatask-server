const express = require('express')
const router=express.Router()
const slideProduct = require('../controller/admin.controller')


router.post('/slideproduct', slideProduct.headerProduct)
router.get('/getproduct', slideProduct.showProduct)
router.delete('/getproduct/:id', slideProduct.editProduct)
module.exports = router