const router=require('express').Router();
const errorHandler = require('../errors/errorHandler');
const apiKeyMiddleware=require('../middlewares/apiKey')
let products=require('../productData');
router.get('/products',(req,res)=>{
    res.render('products',{
        title: 'my product page'
    });
})

router.get('/api/products',(req,res)=>{
    res.json(products)
})

router.post('/api/products',apiKeyMiddleware,(req,res,next)=>{
    const {name,price}=req.body;

    if(!name || !price){
        next(errorHandler.validationError());
    }
    const product={
        name,
        price,
        id: new Date().getTime().toString()
    }
    products.push(product);
    res.json({
        data: product
    });
})

router.delete('/api/products/:productId',(req,res)=>{
    products=products.filter((product)=>req.params.productId !== product.id);
    res.json({status:'OK'});
});
module.exports=router;