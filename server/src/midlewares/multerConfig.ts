import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (_req, file, cb) => {
        let folder = '';
        if (file.mimetype.startsWith('image/')) {
            folder = 'images';
        } else if (file.mimetype.startsWith('video/')) {
            folder = 'videos';
        } else {
            cb(new Error('Invalid file type'), '');
            return;
        }
        const dirPath = path.resolve(__dirname, '..', folder);
        cb(null, dirPath);
    },
    filename: (_req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage });

export default upload;
