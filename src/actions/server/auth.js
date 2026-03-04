'use server'

import { collections, connect } from "@/lib/dbConnect";
import bcrypt from 'bcryptjs'
export const postUser=async(payload)=>{
    const {name,email,password}=payload;
    // check paylaad
    if(!name || !email || !password) return null;
    // check user exist or not
    const isExist=await connect(collections.USER).findOne({email});
    if(isExist) return null;
    // create user
    const newUser={
        provider:'credentials',
        name,
        email,
        password:await bcrypt.hash(password,10),
        role:'user',
    }
    // insert user to database
    const result=await connect(collections.USER).insertOne(newUser);
    console.log('server result',result);
    if(result.acknowledged){
        return {
            insertedId:result.insertedId.toString(),
            ...newUser,
        }
    }
}