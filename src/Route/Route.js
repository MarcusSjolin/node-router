var Decompose = require("./Decompose")
var Verify = require("./Verify")
var Create = require("./Create")

exports = module.exports = Route

function Route(name, route, callback)
{
    var decomposed = Decompose(route)

    return {
        name: name,
        route: route,
        callback: callback,
        regex: decomposed.regex,
        params: decomposed.params,
        setOptions: function() {},
        verify: Verify(name, route, callback, decomposed.regex, decomposed.params),
        create: Create(name, route, decomposed.regex, decomposed.params)
    }
}
