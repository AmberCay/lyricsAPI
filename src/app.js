const express = require(express);
const cors = require('cors');
// const userRouters = require('./routers/user.routers');
const errorHandling = require('./error/errorHandling');

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extends: false}));
app.use(express.json());
// app.use()
app.use((req, res, next) => {
    res.status(404).json({ error: true,
    code: 404,
message: "Endpoint not ofund"})
})

app.use(errorHandling);

module.exports = app;