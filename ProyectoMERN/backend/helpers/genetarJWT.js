//JSONWWEBTOKEN
import jwt from "jsonwebtoken";

const generarJWT = (id) => {
    return jwt.sign({id:id}, "palabraSecreta", {
        expiresIn: "30d"
    })
}

export default generarJWT;