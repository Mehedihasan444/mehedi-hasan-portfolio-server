import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import multer from 'multer';
import config from '../config';
import path from 'path';
import os from 'os';


cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret,
});

export const sendImageToCloudinary = (
    imageName: string,
    filePath: string,
): Promise<Record<string, unknown>> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload(filePath, { public_id: imageName.trim() })
            .then((result) => resolve(result as UploadApiResponse))
            .catch(reject)
            .finally(() => {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });
    });
};


// Ensure uploads directory exists
const uploadDir = path.join(os.tmpdir(), 'uploads');

try {
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
} catch (error) {
    console.error('Failed to create uploads directory:', error);
    throw error; // Stop execution if directory creation fails
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Create the uploads directory dynamically if it doesn't exist
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = path.extname(file.originalname); // Extract file extension
        const baseName = path.basename(file.originalname, ext); // File name without extension
        cb(null, `${baseName}-${uniqueSuffix}${ext}`);
    },
});

const allowedMimeTypes = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
]);

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 4,
    },
    fileFilter: (_req, file, cb) => {
        cb(null, allowedMimeTypes.has(file.mimetype));
    },
});