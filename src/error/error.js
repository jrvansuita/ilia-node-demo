const text = require("../const/text")

module.exports = Object.freeze({
    InvalidValueError: badRequestError(text.INVALID_VALUE),
    MandatoryFieldError: badRequestError(text.MANDATORY_FIELD),
    BadFormaError: badRequestError(text.BAD_FORMAT),
    AlreadyExistsError: conflictError(text.ALREADY_EXISTS),
    OutOfAllowedError: forbiddenError(text.OUT_OF_ALLOWED),
    WeekendNotAllowedError: forbiddenError(text.WEEKEND_NOT_ALLOWED),
    RestHourError: forbiddenError(text.ONE_REST_HOUR)
});

function badRequestError(text) {
    const error = new Error(text);
    error.code = 400
    return error;
}

function conflictError(text) {
    const error = new Error(text);
    error.code = 409
    return error;
}

function forbiddenError(text) {
    const error = new Error(text);
    error.code = 403
    return error;
}