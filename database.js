const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb://boamortest:koaql1@ds211368.mlab.com:11368/koa-graphql',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;