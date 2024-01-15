const express=require('express');
const app=express();
const path=require('path');
const mainRouter=require('./routes/index')
const apiKeyMiddleware=require('./middlewares/apiKey');
const productRouter=require('./routes/products');
const errorHandler = require('./errors/errorHandler');
// const router=express.Router();
// router.route('/').get()
const PORT=process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(productRouter);
app.use(apiKeyMiddleware);
// app.use(express.static('public'))
app.use(mainRouter)

app.use((req,res,next)=>{
    return res.json({
        message:'page not found'
    });
})

app.use((err,req,res,next)=>{

    if(err instanceof errorHandler){
        res.status(err.status).json({
            error: {
                message: err.message,
                status:err.status
            }
        })
    }
    else{
        res.status(500).json({
            error: {
                message: err.message,
                status:err.status
            }
        })
    }
})


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});