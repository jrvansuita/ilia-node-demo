const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./src/routes/routes');
routes.bind(app)

const port = 5555
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})