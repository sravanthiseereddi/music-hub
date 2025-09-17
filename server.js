// server.js - Update your express static file serving
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/database');
const songController = require('./controllers/songController');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from multiple directories
app.use(express.static('views')); // For your main frontend files
app.use('/songs', express.static(path.join(__dirname, 'songs'))); // For audio files
app.use('/images', express.static(path.join(__dirname, 'images'))); // For cover images

// Routes
app.get('/api/songs', songController.getAllSongs);
app.get('/api/songs/language/:language', songController.getSongsByLanguage);
app.get('/api/songs/search/:query', songController.searchSongs);
// server.js - Add a download endpoint
app.get('/api/download/:id', async (req, res) => {
    try {
        const song = await song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        
        // Increment download count
        song.downloads += 1;
        await song.save();
        
        // Send the file for download
        const filePath = path.join(__dirname, song.filePath);
        res.download(filePath, `${song.title} - ${song.singer}.mp3`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.put('/api/songs/download/:id', songController.incrementDownload);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});