import jwt from "jsonwebtoken"
import express from "express"
import http from "http"

export function checkAuthorization(authorization){
    if (!authorization || !authorization.includes('Bearer')){
        throw new Error("invalid token")
    }

    //@ts-ignore
    const [ _bearer , token ] = authorization?.split(' ')
    return token
}