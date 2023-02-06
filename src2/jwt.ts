import jwt from "jsonwebtoken"

export function createToken(payload){
    const token = jwt.sign(payload, "123")

    return token
}

export function verifyToken(token){
    return jwt.verify(token, "123")
}
