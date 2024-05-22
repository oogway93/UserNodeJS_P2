const data = require("../data")
const usersSQL = require("../../../database/usersSQL")

module.exports = async function(req, res) {
    let body = ""
    req.on("data", chunk => {
        body += chunk
    })
    req.on("end", async function () {
        try {
            const parsedBody = JSON.parse(body)
            const name = parsedBody.name
            const age = parsedBody.age
            if (name && age) {
                const query = await usersSQL.createUser(name, age)
                console.log("New User" + JSON.stringify({
                    name: name,
                    password: age
                }))
                res.writeHead(201, { "Content-Type": "application/json" })
                res.end(JSON.stringify({
                    "status": "CREATED", data: {
                        ...query
                    }
                }))
            }
        }
        catch (error) {
            console.error('Error parsing JSON:', error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ "error": "Error parsing JSON data." }));
        }
    })
}