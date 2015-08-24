var XRegExp = require("xregexp").XRegExp

exports = module.exports = function(route) {
    // Make sure quick path is possible to set
    if (route === '*') {
        route = '/*'
    }

    // Make sure full stops are escaped properly
    route = route.replace(/\./g, '\\.')

    // Make sure full stops are escaped properly
    route = route.replace(/\*/g, '.*')

    var params = []

    route = XRegExp.replace(route, XRegExp(':[a-z0-9_-]+', 'ig'), function (match) {
        match = match.replace(':', '')

        // Add parameters list for reference later
        params.push(match)
        // Update path to contain a regex to
        return '(?<' + match + '>[^/]+)'
    });

    return {
        params: params,
        regex: XRegExp(route)
    }
}
