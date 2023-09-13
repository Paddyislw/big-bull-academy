import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://workayushverma02:biYeKAAihzO1OSU2@cluster0.ftk2bgt.mongodb.net/paddytest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb Connected");
    } catch (error) {
        throw new Error("Error in connecting to mongodb.");
    }
}

export default connect;