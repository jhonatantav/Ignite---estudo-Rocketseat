export function buildRoutePath(path){
    const routeParametersRagex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRagex, '(?<$1>[a-z0-9\-_]+)')

    
    const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return pathRegex
}