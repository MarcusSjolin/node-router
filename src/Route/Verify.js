var XRegExp = require("xregexp").XRegExp

exports = module.exports = function (name, route, regex, params) {
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

            return result
        }
        return false
    }
}
