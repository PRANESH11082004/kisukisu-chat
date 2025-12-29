
import express from 'express';
import dotenv from 'dotenv';
import Authroutes from './routes/auth.route.js';
import path from 'path';
import mongoose from 'mongoose';


dotenv.config();

const app = express();
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connected successfully!'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

app.use("/api/auth",Authroutes);

// make deployment ready

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});







