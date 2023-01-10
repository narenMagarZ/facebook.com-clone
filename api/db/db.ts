import mongoose from "mongoose"

const mongoUrl = 'mongodb://localhost/facebook'

export  default async function connectToDb(){
     try{
          mongoose.set('strictQuery',true)
          await mongoose.connect(mongoUrl)
          console.log('db connection is succeed')
     }
     catch(err){
          console.error('error on db connection')
     }
}

