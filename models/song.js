const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  singer: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    default: ''
  },
  downloads: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Song', songSchema);