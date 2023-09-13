import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
    url: String
}, { timestamps: true });

export default mongoose.models.image || mongoose.model("image", imageSchema);