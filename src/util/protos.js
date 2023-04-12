
const moment = require("moment");


String.prototype.isValid = function () {
    return moment(this).isValid()
}

String.prototype.day = function () {
    return moment(this).format("yy-MM-DD")
}

String.prototype.time = function () {
    return moment(this).format("hh:mm:ss")
}

String.prototype.isWeekend = function () {
    const day = moment(this).day()
    return (day === 6 || day === 0)
}

String.prototype.hoursFrom = function (last) {
    const duration = moment.duration(moment(this).diff(moment(this.day() + "T" + last)));
    return duration.asHours()
}

