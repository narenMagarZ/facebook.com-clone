import app from "./app"
import connectToDb from "./db/db"

const port = process.env.PORT || 5000

connectToDb()
app().listen(port,()=>{
     console.log('server is running on port',port)
})