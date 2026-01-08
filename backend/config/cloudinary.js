import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    console.log("Configuring Cloudinary with:", {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        secret_length: process.env.CLOUDINARY_API_SECRET ? process.env.CLOUDINARY_API_SECRET.length : 0
    });
    console.log("Attempting to upload file at:", filePath);
    try {
        if (!filePath) {
            return null
        }

        // 1. Upload to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(filePath)

        // 2. Try to cleanup local file
        try {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        } catch (unlinkError) {
            console.log("Error deleting temp file:", unlinkError)
            // We ignore cleanup errors so we can still return the image URL
        }

        // 3. Return the URL
        return uploadResult.secure_url

    } catch (error) {
        // If UPLOAD failed, then we cleanup and return null
        if (filePath && fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath)
            } catch (e) { /* ignore */ }
        }
        console.log("Cloudinary Upload Error:", error)
        return null;
    }

}
export default uploadOnCloudinary