const getTimeStamp = () => {
    return new Date().toISOString();
}
export default (store = []) => {
    const info = (message) => {
        const timestamp = getTimeStamp();
        store.push({
            type: "info",
            message,
            timestamp,
        });
        console.info(`${timestamp} [INFO] ${message}`);
    }
    const warn = (message) => {
        const timestamp = getTimeStamp();
        store.push({
            type: "warn",
            message,
            timestamp,
        });
        console.warn(`${timestamp} [WARN] ${message}`);
    }
    const error = (message) => {
        const timestamp = getTimeStamp();
        store.push({
            type: "error",
            message,
            timestamp,
        });
        console.error(`${timestamp} [ERROR] ${message}`);
    }
    return { info, warn, error };
}