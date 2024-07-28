import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error('MONGODB_URI environment variable is not set.');
            return
        }

        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB.');
    } catch (err) {
        throw new Error(`Error connecting to MongoDB: ${err}`);
    }
};

export default connectToDatabase;