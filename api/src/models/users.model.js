import mongoose from "mongoose";
import { generateUserCode } from "../controllers/userCode.controller.js";

const usersSchema = new mongoose.Schema({
    code: {
        type: String,
        default: generateUserCode,
        unique: true,
        required: true,
    },
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