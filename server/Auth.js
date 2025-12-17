// middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Login first!" });

    try {
        const decoded = jwt.verify(token, "SECRET123");
        req.user = decoded;   
        console.log("decoded",decoded);
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
