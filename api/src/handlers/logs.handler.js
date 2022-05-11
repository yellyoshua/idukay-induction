export default (req, res, next) => {
    res.json({ logs: req.logs }).status(200);
}