const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
const token = req.headers['authorization']?.split(' ')[1];

if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token.' });
}

try {
    const decoded = jwt.verify(token, 'secreto'); // Usa la misma clave secreta
    req.user = decoded; // Guardar los datos del usuario en la solicitud
    next(); // Pasar al siguiente middleware o ruta
} catch (error) {
    return res.status(403).json({ error: 'Token inválido o expirado.' });
}
};

module.exports = authMiddleware;