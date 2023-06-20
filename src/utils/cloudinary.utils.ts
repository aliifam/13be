import cloudinary, { UploadApiResponse } from "cloudinary";
import { configDotenv } from "dotenv";
import multer, { Multer } from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

configDotenv();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Create a Cloudinary storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "your-folder-name",
    resource_type: "auto",
  },
});

// Create a Multer instance with the Cloudinary storage engine
export const upload: Multer = multer({ storage });

// Utility function to upload file to Cloudinary
export const uploadToCloudinary = async (
  file: Express.Multer.File
): Promise<UploadApiResponse> => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file.path,
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};
