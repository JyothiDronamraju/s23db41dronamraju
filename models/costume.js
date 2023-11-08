const mongoose = require("mongoose");

// Define the Mongoose schema
const costumeSchema = mongoose.Schema({
  costume_type: String,
  size: String,
  cost: Number,
});

// Create the 'Costume' model
const Costume = mongoose.model("Costume", costumeSchema);

// Connect to MongoDB using the provided connection string
mongoose.connect('mongodb+srv://Cluster0:82MNbiBJZT2Fcg9M@cluster0.eb53075.mongodb.net/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = Costume;
