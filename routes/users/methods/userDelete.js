const data = require("../data")
const usersSQL = require("../../../database/usersSQL")

module.exports = async function(req, res, path) {
    const userId = parseInt(path.split("/")[3], 10)

    const success = await usersSQL.deleteUser(userId)
    if (success == true) {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ status: "DELETED" }))
    } else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ status: "NOT DELETED" }))
    }
}