import express from 'express';
import postgresClient from "./config/db.js";
import userRouter from './routers/userRouter.js'
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())
app.use('/users',userRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    postgresClient.connect(err =>{
        if (err){
            console.log(err)
        }
        else{
            console.log("db connection successful");
        }

    })
})
