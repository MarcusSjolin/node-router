var XRegExp = require("xregexp").XRegExp

exports = module.exports = function (name, route, callback, regex, params) {
    return function(query) {
        if (regex.xtest(query)) {
            var variables = XRegExp.exec(query, regex)

            var result = {
                variables: {}
            }

            for (var i in variables) {
                if (params.indexOf(i) > -1) {
                    result.variables[i] = variables[i]
                }
            }

            result.name = name
            result.route = route
            result.query = query
            result.callback = callback

            return result
        }
        return false
    }
}
