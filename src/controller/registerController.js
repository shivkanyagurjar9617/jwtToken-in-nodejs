const { User } = require("../models/registerModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const registerController = (req,res)=>{

    //console.log(req.body)
    User.findOne({email:req.body.email},(error,user)=>{
        if(user === null){
            let saltRounds = 10;
            let encPass = bcrypt.hashSync(req.body.password_hash, saltRounds);
            req.body.password_hash = encPass 

            const token = jwt.sign(req.body, process.env.JWT_TOKEN); 
            const userObj = new User( req.body );
            userObj.save()
            
            .then(()=>{
                res.status(200).json({
                    msg: "User saved successfully",
                    userDeatail:req.body,
                    token:token
                })
            }).catch(()=>{
                res.status(404).json({
                    msg: "User not found"
                })
            })
        }else{
            res.status(200).json({
                msg:"user has already exists"
            })
        }
    })
        
}

module.exports = {registerController}