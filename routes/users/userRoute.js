const url = require("url")

const usersGetAll = require("./methods/userGetAll")
const userCreate = require("./methods/userCreate")
const userGet = require("./methods/userGet")
const userDelete = require("./methods/userDelete")
const userUpdate = require("./methods/userUpdate")

const usersRoute = (req, res) => {
    const path = url.parse(req.url, true).pathname
    const method = req.method

    const defaultUrl = "/api/users/"

    res.setHeader("Content-Type", "application/json")
    if (path === defaultUrl && method === "GET") { usersGetAll(req, res) }
    else if (path === defaultUrl && method === "POST") { userCreate(req, res) }
    else if (path.startsWith(defaultUrl) && method === "GET") { userGet(req, res, path) }
    else if (path.startsWith(defaultUrl) && method === "PUT") { userUpdate(req, res, path) }
    else if (path.startsWith(defaultUrl) && method === "DELETE") { userDelete(req, res, path) }
};
module.exports = usersRoute