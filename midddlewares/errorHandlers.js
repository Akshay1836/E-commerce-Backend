const {customAPIError}=require('../error/customErrors')

const errorHandler = (error, req, res, next) => {
        if(error instanceof customAPIError){
          console.log("false")
          return res.status(error.statusCode).json({msg:error.message})
        } 
        console.log("500")
        res.status(500).json('Internal error occured');
};

module.exports=errorHandler;