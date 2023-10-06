
exports.uploadDoc = async  (req , res) =>{
    console.log(req.file) ;
    
    res.json({message : "success"}) ; 
}