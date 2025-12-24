
import express from 'express';
import dotenv from 'dotenv';
import Authroutes from './routes/auth.route.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});

app.use("/api/auth",Authroutes);

