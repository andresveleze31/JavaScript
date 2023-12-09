import  jwt  from "jsonwebtoken";
import Veterinario from "../models/Veterinario.js";
const checkAuth = async(req, res, next) => {
    let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ){
    try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, "palabraSecreta");

        const veterinario = await Veterinario.findById(decoded.id);
        console.log(veterinario);
        
    } catch (error) {
        res.json({msg: "Token no valido."})
    }
  }
  else{
    console.log("Token no correcto.");
  }
    next();
};

export default checkAuth;
