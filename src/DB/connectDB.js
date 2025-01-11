import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB is connected successfully || DB host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error while connect DB || connectDB.js file || ${error}`);
        process.exit(1)
    }
}

export default connectDB