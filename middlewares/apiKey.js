const errorHandler = require("../errors/errorHandler");

function apiKey(req,res,next){
    const api_key='1234567';
    console.log(req.query.api_key);
    const userApiKey=req.query.api_key;
    if(userApiKey && (userApiKey==api_key)){
        next();
    }
    else{
        next(errorHandler.forbidden('Api key is not valid'));
    }
}

module.exports=apiKey