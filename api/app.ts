import express from 'express'
import path from 'path'
import { apiRouter } from './router/router'

export default function app(){
     const app = express()
     app.use('/image',express.static(path.join(__dirname,'./image/uploads')))
     app.use('/',apiRouter)
     return app
}