const router=require('express').Router();
const apiKeyMiddleware=require('../middlewares/apiKey');

// router.use(apiKeyMiddleware);

router.get('/',(req,res)=>{
    res.render('index',{
        title: 'my Home page'
    });
})

router.get('/about',(req,res)=>{
    res.render('about',{
        title:'my about page'
    });

})

router.get('/download',(req,res)=>{
    res.download("C:/Users/sandi/Express/views/about.ejs");
})

// router.route('/api/products').get(apiKeyMiddleware, (req, res) => {
//     // Provide a JSON response for the /api/products endpoint
//     try {
//         res.json([
//             { id: '123', name: 'Chrome' },
//             { id: '124', name: 'Firefox' }
//         ]);
//     } catch (error) {
//         // Handle errors and send a 500 status code with a JSON response
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
// router.get('/api/products',apiKeyMiddleware,(req,res)=>{
//     res.json([{
//         id:'123',
//         name: 'Chrome'
//     },{
//         id:'124',
//         name:'Firefox'
//     }])
// })

module.exports=router;