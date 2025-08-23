import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
    {
        token: String,
        user: {type: mongoose.Schema.Types.ObjectId, ref: "Admin"},
        expiryDate: Date
    },
    { timestamps: true }
)

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

export default RefreshToken;