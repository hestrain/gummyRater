const { Schema, model } = require('mongoose');

// Schema to create Event model
const weedSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 20,
    },
    rating: {
      type: Integer,
      required: true,
    },
    choices: [choiceSchema],
    image: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },

);

const Event = model('event', eventSchema);

module.exports = Event;
