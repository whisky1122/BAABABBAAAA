import multer from 'multer'

import os from 'os'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, os.tmpdir())
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.replace(/\s+/g, '_'))
    }
});
let upload = multer({ storage })

export default upload
