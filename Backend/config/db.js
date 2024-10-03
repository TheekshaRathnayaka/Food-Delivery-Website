import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://theeksha:12345food@cluster0.oatcq.mongodb.net/food-del').then( () => console.log("DB connected"))
}
