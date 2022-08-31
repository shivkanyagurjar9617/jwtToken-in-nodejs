
const jwt = require('jsonwebtoken')

let frdMiddileware = (req,res,next)=>{
    //console.log(req.headers.authorization.split(" ")[1])
    var authToken = req.headers.authorization.split(" ")[1]

    try {
        //var decoded = jwt.verify(token, 'secretKey');
        var verifyToken = jwt.verify(authToken,process.env.JWT_TOKEN)
        console.log(verifyToken)
    } catch (error) {
        res.status(403).json({
            msg:"forbidden"
        })
    }
    next()
}
module.exports ={frdMiddileware}