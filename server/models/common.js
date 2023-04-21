const mongoose = require('mongoose');

const setupMongoDb = async (url) => {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(url);
}

module.exports = { setupMongoDb };
