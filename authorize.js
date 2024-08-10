const authorize = (req,res,next)=>{

    const {name} = req.query;
    if (name ==="kk"){
        req.user = {"name":"kk", id:3}
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }
} 

module.exports = authorize