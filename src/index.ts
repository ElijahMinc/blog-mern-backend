import express from 'express'
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload'
import authRouter from './routes/auth.router';
import userRouter from './routes/user.router';
import postRouter from './routes/post.router';
import cors from 'cors'

import 'dotenv/config'
import commentRouter from './routes/comments.router';


let isProduction: boolean = true

if(process.env.MODE !== 'production'){
   isProduction = false
}

console.log('productionMode', isProduction)
const app = express();

export const SECRET_KEY = 'secret_key'


const CONNECT_DB = process.env.MONGODB_CONNECT || 'mongodb+srv://Ilya:1998ventru1998@cluster0.ewigdl3.mongodb.net/?retryWrites=true&w=majority';

app.use(cors());
app.use(fileUpload({}))
app.use(express.json());
// app.use('/upload', express.static(`${isProduction ? 'build' : 'src'}/static`)) 
app.use('/upload', express.static(`build/static`)) 



app.use(authRouter)
app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)

const start = async () => {
   try {

      app.listen(process.env.PORT || 9000, () => {
         console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT || 9000}`);
       });

      await mongoose.connect(CONNECT_DB, (e) => {
         if(e){
            console.log('error', e)
         }
         console.log('mongo was connected')
      })


   } catch (e) {
      console.log('error')
      
   }
   
}



start()