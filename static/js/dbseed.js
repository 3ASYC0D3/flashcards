require('dotenv').config();

const mongoose = require('mongoose');
const cardSamples = require('./cards');
const { Schema } = mongoose;
const dbUrl = process.env.DB_URL;
const Card = require('./../../models/cards');


mongoose.connect(dbUrl)
  .then(() => {
      console.log('DB connected')
  })
  .catch(err => {
        console.log(err)
  });

const seedDB = async () => {
    await Card.deleteMany({});
    for (let i = 0; i < 85; i++ ) {
            const card = new Card({
            front: `${cardSamples[i].front}`,
            back: `${cardSamples[i].back}`,
            number: `${cardSamples[i].no}`
        });
        await card.save();
    };
    allCards = await Card.find();
    console.log(allCards);
};


  seedDB().then(() => {
    mongoose.connection.close();
    console.log('Database disconnected');
});
