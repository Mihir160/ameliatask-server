const User = require("../models/user.model");

const user = {
    registerUser: async(req, res) =>{
        
        try {
            const user = new User(req.body);
            await user.save()
            res.status(201).send(user)
            if(!user){
                return res.json({"code":'User not created'})
            }
        } catch (error) {
            res.status(200).json({
                message: error.message
            })
        }
    },
    loginUser: async(req, res) =>{
        const {email,password}=req.body
        const user = await User.findOne({email,password})
        res.status(200).send('login done')
        if(!user){
            return res.json({status:'Not able to find the user'})
        }
    }
    
}
module.exports = user