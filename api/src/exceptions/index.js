export function NonExistUserException(message) {
    return new Error("Dont exist user: " + message);
}

export function NonLoggerException() {
    return new Error("Logger is not defined");
}
