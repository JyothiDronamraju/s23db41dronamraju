const mongoose = require("mongoose")

const apartmentSchema = mongoose.Schema({
  apartment_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    // Add your validation for the location attribute here
    // For example, you can require a minimum length for the location string
    minlength: [5, 'Location must be at least 5 characters long'],
    // You can also use regex for more specific validation
    // match: [/^[a-zA-Z0-9\s,]+$/, 'Invalid characters in location'],
  },
  rent: {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],
    max: [5000, 'Price must be at most 5000'],
  },
});

module.exports = mongoose.model("Apartment", apartmentSchema);
