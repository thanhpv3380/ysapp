// require package
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// use express 
const app = express();

//config env
require('dotenv').config();

// config server socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

// config PORT 
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

// connection db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(db => console.log('DB is Connected'));

// server listen port
server.listen(port, () => console.log('start ' + port));

// use router
const routerUsers = require('./routes/users.route');
const routerGames = require('./routes/games.route');

app.use('/users', routerUsers);
app.use('/games', routerGames);



