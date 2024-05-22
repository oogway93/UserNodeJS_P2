const usersSQL = require("../../../database/usersSQL")

module.exports = async function (req, res, path) {
    const userId = parseInt(path.split('/')[3], 10);
    const result = await usersSQL.getUserById(userId)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ status: "SUCCESS", data: result }))
}