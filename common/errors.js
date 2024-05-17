class FILE_TOO_BIG extends Error {
    constructor () {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'FILE_TOO_BIG';
        this.message = 'File size is too big';
        this.statusCode = 422;
    }
}

class INVALID_FILE_TYPE extends Error {
    constructor () {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'INVALID_FILE_TYPE';
        this.message = 'Invalid file type. Only images are allowed.';
        this.statusCode = 422;
    }
}

module.exports = {
    FILE_TOO_BIG,
    INVALID_FILE_TYPE,
};