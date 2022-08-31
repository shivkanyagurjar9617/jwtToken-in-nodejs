const friendController = (req,res)=>{
    res.status(200).json({
        msg:"friend data stored successfully"
    })
}

module.exports = {friendController}