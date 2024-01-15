class errorHandler{
    constructor(status,msg){
        this.status=status;
        this.message=msg;
    }

    static validationError(message='All fields are required'){
        return new errorHandler(422,message);
    }

    static notFoundError(message='Not Found!'){
        return new errorHandler(404,message)
    }

    static serverError(message='Internal Error'){
        return new errorHandler(500,message);
    }

    static forbidden(message='Not allowed'){
        return new errorHandler(403,message);
    }

}

module.exports=errorHandler;