const notfound=(req,res,next)=>{
        console.log("not found session")
        res.status(404).send('requested route not found')
}

module.exports=notfound;