import express from 'express';
import { register } from '../controller/usercontroller.js';
 import { Getuser } from '../controller/usercontroller.js';
 import { updateuser } from '../controller/usercontroller.js';
 import { deleteuser } from '../controller/usercontroller.js';
 import { login } from '../controller/usercontroller.js';
const routes = express.Router();
 routes.route("/register").post(register)
 routes.route("/Getuser").get(Getuser)
 routes.route("/update/:id").put(updateuser)
 routes.route("/delete/:id").delete(deleteuser)
 routes.route("/login").post(login)

 export default routes;
//  routes ia a variable 
// routes.route is a built-in method 
// .post(register) is a fun in usercontroller