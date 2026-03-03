'use server'

import { collections, connect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";


// getProducts
export const getProducts = async () => {
  const data = await connect(collections.PRODUCTS).find().toArray();
  return JSON.parse(JSON.stringify(data));
};

// getSingle card

export const getSingleCard=async (id)=>{
    if(id.length !=24){
        return
    }
    const query={_id:new ObjectId(id)}
    const result=await connect(collections.PRODUCTS).findOne(query)
    if (!result) return null;

  return {
    ...result,
    _id: result._id.toString(),
  };
}