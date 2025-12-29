
import mongoose from 'mongoose';

export const connectDB =  async () =>{
    try{
        const conn  = await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected successfully!',conn.connection.host);
    }
    catch(err){
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1); // Exit process with failure
    }
} 
