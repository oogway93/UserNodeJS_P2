const url = require("url");

const usersRoute = require("./users/userRoute");

const initRouter = (req, res) => {
    const path = url.parse(req.url, true).pathname

    if (path.startsWith("/api/users/")) {
        usersRoute(req, res)
    } else {
        res.setHeader("Content-Type", "application/json")
        res.writeHead(404)
        res.end(JSON.stringify({ error: "Unknown path" }))
    }
};

module.exports = initRouter;