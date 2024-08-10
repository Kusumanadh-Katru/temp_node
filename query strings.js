const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.json([{name:"Kusumanadh"}, {age:22}]);
})


app.get('/api/products/:productId',(req,res)=>{
    console.log(req.params)
    const singleProduct = products.find((product)=>product.id=== Number(productId))

    if(!singleProduct){return res.status(404).send('Product does not exits')}
    return res.json(singleProduct)
})


app.listen(3000,()=>{
    console.log("Server listening on port 3000....")
})