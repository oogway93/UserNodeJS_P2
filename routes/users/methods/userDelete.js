const data = require("../data")

module.exports = (req, res, path) => {
    const userId = parseInt(path.split("/")[3], 10)

    data.deleteUser(userId)

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ status: "DELETED" }))
}