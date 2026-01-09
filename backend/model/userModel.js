import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    phone: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    cartData: {
        type: Object,
        default: {}
    }
}, { timestamps: true, minimize: false })

const User = mongoose.model("User", userSchema)

export default User