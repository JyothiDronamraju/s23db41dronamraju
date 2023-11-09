const mongoose = require("mongoose");

// Define the Mongoose schema
const CostumeSchema = new mongoose.Schema({
  costume_type: String,
  size: String,
  cost: Number,
});


// Create the 'costume' model with a lowercase 'c'
const Costume = mongoose.model("Costume", CostumeSchema);

// Create a function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://Cluster0:82MNbiBJZT2Fcg9M@cluster0.eb53075.mongodb.net/your_database', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Export the 'costume' model and the function to connect to the database
module.exports = { Costume, connectToDatabase };
