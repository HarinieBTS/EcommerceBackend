const express=require('express')
const app=express();
const ProductRouter=require('./routes/productRoutes')
const UserRouter=require('./routes/userRoutes')
const CartRouter=require('./routes/cartRoutes')
const OrderRouter=require('./routes/orderRoutes')
const mongoose=require('mongoose')
const cors=require('cors')
mongoose.connect('mongodb+srv://hariniebabu:Hari2604@cluster0.9ajl13s.mongodb.net/ecommerceee'
).then(()=>{
    console.log("mongodb connected")
})
app.use(express.json())
app.set("view engine","ejs");
app.use('/',ProductRouter);
app.use('/User', UserRouter);
app.use('/',CartRouter);    
app.use('/',OrderRouter);
app.use(cors());
app.listen(8000,()=>{
    console.log("server is running on the port 8000")
})