export function deepClone(content) {
    return JSON.parse(JSON.stringify(content));
}