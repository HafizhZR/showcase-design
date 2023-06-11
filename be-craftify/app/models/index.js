const dbconfig = require('../config/database');
const mongoose = require('mongoose');

mongoose
  .connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

module.exports = {
  mongoose,
  url: dbconfig.url,
  design: require('./design.model.js')(mongoose),
  user: require('./user.model.js')(mongoose),
};
