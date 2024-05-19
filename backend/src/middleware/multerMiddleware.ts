import multer from "multer";
import {NextFunction, Request, Response} from "express";
import {put} from "@vercel/blob";

// Multer storage configuration
const memoryStorage = multer.memoryStorage();

// Multer upload instance for memory storage
const memoryUpload = multer({ storage: memoryStorage });


interface CustomFile extends Express.Multer.File {
	blob?: any; // Define the blob property, can be any type you expect
}
const uploadToVercelBlob = async (file:Express.Multer.File) => {
	return await put("uploads/" + file.originalname, file.buffer, { access: 'public' });

};


export const upload = async (req: Request, res: Response, next: NextFunction) => {
	// Determine which multer instance to use based on environment
	const upload = memoryUpload.single('image')

	upload(req, res, async (err: any) => {
		if (err) {
			return res.status(400).send('Error uploading file');
		}

		if (req.file) {
			try {
				// Cast req.file to CustomFile to access the blob property
				const fileWithBlob = req.file as CustomFile;
				fileWithBlob.blob = await uploadToVercelBlob(fileWithBlob); // Attach the blob information to the file object
				next(); // Continue to the next middleware/controller
			} catch (uploadErr) {
				console.error('Error uploading to Vercel Blob:', uploadErr);
				res.status(500).send('Failed to upload to Vercel Blob');
			}
		}else{
			next();
		}


	});
};

export default upload;
