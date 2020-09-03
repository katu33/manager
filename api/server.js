const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3333;
const app = express();

app.use(helmet());

app.use(cors);
app.use(express.json());

app.use('/api', require('./src/routes/router').default);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello nhầm link r'
    });
});
app.get('*', (req, res) => {
    res.json({
        message: 'Hello nhầm link r'
    });
});

app.listen(port, () => {
    console.log('server is listening on port : ' + port);
});











// const morgan = require('morgan');
// const rfs = require('rotating-file-stream');
// const accessLogStream = rfs.createStream("access.log", {
//     interval: "1d",
//     path: path.join(__dirname, "log")
// });
// app.use(isProduction ? morgan("combined", {stream: accessLogStream}) : morgan("dev"));