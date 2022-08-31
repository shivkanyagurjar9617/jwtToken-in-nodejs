const { User } = require("../models/registerModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const loginController = (req,res)=>{
    console.log(req.body)

    const {email,password_hash} = req.body
    
    User.findOne({ email: req.body.email},(error,user)=>{

        if(user!==null){

           if(bcrypt.compareSync(password_hash,user.password_hash)){
                const token = jwt.sign(req.body,process.env.JWT_TOKEN)       
                res.status(200).json({
                    msg:'user login successfully',
                    userDeatail:req.body,
                    token:token
                })


           }else {
                res.status(403).json({
                    msg:'invalid credentials'
                })
           }

           
        }else{
            res.status(403).json({
                msg:'invalid credentials'
            })
        }

    })

   
}

module.exports = {loginController}