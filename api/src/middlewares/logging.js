import { NonLoggerException } from "../exceptions/index.js"
const logsCache = [];

export default function (logsHelper) {
    if (typeof logsHelper !== "function")
        throw new NonLoggerException();
    return function (req, res, next) {
        req.logs = logsCache;
        req.log = logsHelper(req.logs);
        req.log.info(`${req.method} ${req.url}`);
        
        next();
    };
}