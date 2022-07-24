require('dotenv').config();

const
    express = require('express'),
    cookieParser = require('cookie-parser'),
    app = express(),
    cors = require('cors');

require('./config/mongoose.config')(process.env.DB_NAME);

// // config the server to accept and update cookies, and it helps to decode the content of cookie
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json({limit: '50mb'}), express.urlencoded({ extended: true }));

// // require('./routes/memory.routes')(app);
require('./routes/user.routes')(app);

app.listen(process.env.DB_PORT, () => console.log(`The server is running on ${process.env.DB_PORT}`));