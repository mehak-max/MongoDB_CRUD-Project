import express from 'express';
import {products} from './Data.js'
import dotenv from 'dotenv'
import User from './model/usermodel.js';
import dbconnection from './config/dbconnection.js';
import routes from './routes/userroutes.js';
dotenv.config();
// fun should written after app 
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
dbconnection();
// should import here from usermodel 
User();
app.use("/api",routes)
app.get('/products', (req, res) =>{
    res.send(products);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
