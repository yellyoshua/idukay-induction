export default function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "No token provided" });
    }
    const bearer = req.headers.authorization.split(" ")[0];
    if (!bearer || bearer !== 'Bearer') {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    next();
}