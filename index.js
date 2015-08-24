exports.Router = require("./src/Router/Router")
exports.Route = require("./src/Route/Route")


var myRouter = this.Router()

myRouter.add("marcus", "/marcus/:id/:date")
console.log(myRouter.find("/marcus/a/a"))
