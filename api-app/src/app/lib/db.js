import mongoose from "mongoose";


export async function connectDb() {
    mongoose.connect('mongodb://127.0.0.1:27017/nextapp')
    .then(()=>console.log('db connected')    )
    .catch((e)=>console.log('not connected ',e)    )
}

