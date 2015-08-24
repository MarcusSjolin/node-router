var XRegExp = require("xregexp").XRegExp

exports = module.exports = function (name, route, regex, params) {
    return function(userParams) {
        userParams = userParams || {}
        for (var i in params) {
            if (! (params[i] in userParams)) {
                return false
            }

            console.log("Replacing :"+params[i]+" with "+userParams[params[i]])
            route = XRegExp.replace(route, XRegExp(':'+params[i], 'i'), function(match) {
                return userParams[params[i]]
            })
        }
        return route
    }
}
