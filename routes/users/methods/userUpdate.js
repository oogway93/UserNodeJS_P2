const data = require("../data")
const usersSQL = require("../../../database/usersSQL")

module.exports = (req, res, path) => {
    let body = ""
    req.on("data", chunk => {
        body += chunk
    })
    req.on("end", async function () {
        try {
            const userId = parseInt(path.split("/")[3], 10)
            const parsedBody = JSON.parse(body)
            const name = parsedBody.name
            const age = parsedBody.age
            if (userId && name && age) {
                console.log("Updated user" + JSON.stringify({ id: userId, name: name, password: age }))
                let result = await usersSQL.updateUser(userId, name, age)
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ status: "UPDATED", data: result }))
            }
        } catch (error) {
            console.error('Error parsing JSON or user Id:', error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ "error": "Error parsing JSON data or user Id." }));
        }
    })

}