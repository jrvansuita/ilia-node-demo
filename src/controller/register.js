
const RegisterRepository = require("../repository/register");
const Error = require("../error/error");

module.exports = class RegisterController {

    constructor() {
        this.repository = new RegisterRepository()
    }

    hasAtLeastOne(value) {
        if (this.count(value)) {
            let last = this.get(value).slice(-1)
            let hours = value.hoursFrom(last)
        }
    }

    post(value) {
        if (!value) throw Error.MandatoryFieldError
        if (!value?.isValid()) throw Error.BadFormaError
        if (value.isWeekend()) throw Error.WeekendNotAllowedError
        if (this.repository.has(value)) throw Error.AlreadyExistsError

        const sameDayCount = this.repository.count(value)
        if (sameDayCount > 0) {
            if (sameDayCount == 4) throw Error.OutOfAllowedError

            const hoursDiff = value.hoursFrom(this.repository.last(value))
            if (hoursDiff < 0) throw Error.InvalidValueError

            if (sameDayCount == 2 && hoursDiff < 1) throw Error.RestHourError
        }

        return this.repository.add(value)
    }

    get(calendar = null, month = null) {
        if (month) {
            return {
                "mes": month,
                "horasTrabalhadas": "PT69H35M5S",
                "horasExcedentes": "PT25M5S",
                "horasDevidas": "PT0S",
                "registros": [
                    {
                        "dia": "2023-04-12",
                        "horarios": [
                            "08:00:00",
                            "12:00:00",
                            "13:00:00",
                            "18:00:00"
                        ]
                    }
                ]
            }
        }
        return {
            'dia': value.day(),
            'horarios': this.repository.get(value)
        }
    }

}

