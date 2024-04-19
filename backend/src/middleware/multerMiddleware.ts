import multer from "multer";
import { Request } from "express";

// Multer storage configuration
const storage = multer.diskStorage({
	destination: function (
		req: Request,
		file: Express.Multer.File,
		cb: Function
	) {
		cb(null, "public/uploads/"); // Specify the destination directory
	},
	filename: function (req: Request, file: Express.Multer.File, cb: Function) {
		cb(null, file.originalname); // Use the original filename
	},
});

// Multer upload instance
const upload = multer({ storage: storage });

export default upload;
