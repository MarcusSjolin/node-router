var Route = require("../Route/Route")

exports = module.exports = Router

function Router()
{
    var routes = []

    return {
        add: function(name, route) {
            routes.push (new Route(name, route))
        },
        find: function(route) {
            var resultRoute = false

            routes.forEach(function(testRoute) {
                var verified = testRoute.verify(route)
                if (verified) {
                    resultRoute = verified
                }
            })


            return resultRoute
        }
    }
}
