const cache = require("../cache/cache");
require("../util/protos")

module.exports = class RegisterRepository {

    add(value) {
        cache[value.day()] = [...(cache[value.day()] || []), value.time()]

        console.log(cache)
    }

    has(value) {
        return cache[value.day()]?.includes(value.time()) === true
    }

    count(value) {
        return cache[value.day()]?.length || 0
    }

    get(value) {
        return cache[value.day()]
    }

    last(value) {
        return this.get(value).slice(-1)
    }

}