const data = require("../data")

module.exports = (req, res) => {
    const result = data.getAllUsers()
    res.writeHead(200)
    res.end(JSON.stringify({status: "SUCCESS", data: result}))
}