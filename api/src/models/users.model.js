import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    editable: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true, collection: "users" });


export default mongoose.model("users", usersSchema);