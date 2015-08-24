var Route = require("../Route/Route")

exports = module.exports = Router

function Router()
{
    var routes = []

    return {
        add: function(name, route, callback) {
            routes.push (new Route(name, route, callback))
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
        },
        gitAll: function() {
            var resultRoutes = []

            routes.forEach(function(testRoute) {
                resultRoutes.push(testRoute.route)
            })

            return resultRoute
        }
    }
}
