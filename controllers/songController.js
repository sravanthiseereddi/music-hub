const Song = require('../models/song');

// Get all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get songs by language
exports.getSongsByLanguage = async (req, res) => {
  try {
    const { language } = req.params;
    const songs = await Song.find({ language }).sort({ createdAt: -1 });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search songs
exports.searchSongs = async (req, res) => {
  try {
    const { query } = req.params;
    const songs = await Song.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { singer: { $regex: query, $options: 'i' } }
      ]
    }).limit(10);
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Increment download count
exports.incrementDownload = async (req, res) => {
  try {
    const { id } = req.params;
    await Song.findByIdAndUpdate(id, { $inc: { downloads: 1 } });
    res.json({ message: 'Download count updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};