const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const port=process.env.PORT || 3001;
const task=require('./routes/route')
const connectDb=require('./Db/connect');
const notfound=require('./midddlewares/not-found');
const errorHandler=require('./midddlewares/errorHandlers');
require('express-async-errors');
                                                                
app.use(express.json())
app.use('/tasks',task)
app.use(notfound);
app.use(errorHandler);



const start=async()=>{
        try{
                await connectDb();
                app.listen(port,(error)=>{
                        if(!error){
                                console.log(`app running on ${port}`);
                        }
                        else{
                                console.log('error occured');
                        }
                })
        }catch(error){
                console.log(error);
        }
}
start();

