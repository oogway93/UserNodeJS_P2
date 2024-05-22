const data = require("../data")
const usersSQL = require("../../../database/usersSQL")

module.exports = async function(req, res) {
    const result = await usersSQL.getUsers()
    res.writeHead(200)
    res.end(JSON.stringify({status: "SUCCESS", data: result}))
}