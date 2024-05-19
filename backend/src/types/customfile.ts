export interface CustomFile extends Express.Multer.File {
    blob?: any; // Define the blob property, can be any type you expect
    data?: Buffer; // Add the data property if needed
}