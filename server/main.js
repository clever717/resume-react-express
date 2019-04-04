import express from 'express';
import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import mongoose from 'mongoose';
import session from 'express-session';

import router from './routes'

const app = express();

// [CONFIGURE - SERVER PORT]
const port = 3000;
const devPort = 4000;

// [CONFIGURE - MORGAN : HTTP Request Logger Middleware]
app.use(morgan('dev'));
app.use(bodyParser.json());



// [CONNECT TO MONGODB SERVER]
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb+srv://resume:resume1!@resume-cluster-iucdd.mongodb.net/resume?retryWrites=true', {useNewUrlParser: true});

// [CONFIGURE - EXPRESS-SESSION]
app.use(session({
  secret: 'Resume1!',
  resave: false,
  saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../public')));

app.use('/api', router);

app.listen(port, () => {
  console.log('Express is listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
      devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
      }
  );
}
