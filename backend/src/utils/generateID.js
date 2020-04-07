const crypto = require('crypto')

function generateUniqueID() {
    return crypto.randomBytes(4).toString('HEX');
}

module.exports = generateUniqueID