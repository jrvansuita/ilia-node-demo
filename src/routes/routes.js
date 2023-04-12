const RegisterController = require('../controller/register');

module.exports = {

    bind(app) {
        app.get("/", (req, res) => {
            res.send("Ilia demo home page")
        })


        const controller = new RegisterController()

        app.post("/v1/batidas", (req, res) => {
            try {
                controller.post(req.body.dataHora)
                res.send(controller.get(req.body.dataHora))
            } catch (e) {
                res.status(e.code || 400).send(e.message)
            }
        })

        app.post("/v1/folhas-de-ponto/", (req, res) => {
            try {
                res.send(controller.get(null, req.path))
            } catch (e) {
                res.status(e.code || 400).send(e.message)
            }
        })



    }

}