import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (_req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, path.join(__dirname, 'images'));
        } else if (file.mimetype.startsWith('video/')) {
            cb(null, path.join(__dirname, 'videos'));
        } else {
            cb(new Error('Invalid file type'), '');
        }
    },
    filename: (_req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export default upload;
