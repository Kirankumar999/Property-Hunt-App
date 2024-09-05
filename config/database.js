import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    // if the database is already connected don't connect it again.
    if (connected) {
        console.log('mongo DB already connected.')
        return;
    }
    // connect to mongo DB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true; 
        console.log(connected);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;