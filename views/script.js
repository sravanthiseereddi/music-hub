document.addEventListener('DOMContentLoaded', function() {
    const songsContainer = document.getElementById('songsContainer');
    const languageList = document.getElementById('languageList');
    const sectionTitle = document.getElementById('sectionTitle');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    let allSongs = [];
    
    // Fetch all songs
    async function fetchSongs() {
        try {
            const response = await fetch('/api/songs');
            allSongs = await response.json();
            displaySongs(allSongs);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    }
    
    // Display songs in the grid
    function displaySongs(songs) {
        songsContainer.innerHTML = '';
        
        if (songs.length === 0) {
            songsContainer.innerHTML = '<p class="no-songs">No songs found</p>';
            return;
        }
        
        songs.forEach(song => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            
            songCard.innerHTML = `
                <img src="${song.coverImage}" alt="${song.title}" class="song-image">
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-singer">${song.singer}</div>
                    <div class="song-duration">${song.duration}</div>
                    <button class="download-btn" data-id="${song._id}">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            `;
            
            songsContainer.appendChild(songCard);
        });
        
        // Add event listeners to download buttons
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const songId = this.getAttribute('data-id');
                downloadSong(songId);
            });
        });
    }
    
    // Download song function
    async function downloadSong(songId) {
        try {
            // Increment download count
            await fetch(`/api/songs/download/${songId}`, {
                method: 'PUT'
            });
            
            // Find the song to download
            const song = allSongs.find(s => s._id === songId);
            if (song) {
                // In a real application, this would trigger the actual download
                // For demo purposes, we'll just show an alert
                alert(`Downloading: ${song.title} by ${song.singer}`);
                
                // Simulate download (in a real app, this would be a link to the actual file)
                const a = document.createElement('a');
                a.href = song.filePath;
                a.download = `${song.title} - ${song.singer}.mp3`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        } catch (error) {
            console.error('Error downloading song:', error);
        }
    }
    
    // Filter songs by language
    languageList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            // Update active class
            document.querySelectorAll('#languageList li').forEach(li => {
                li.classList.remove('active');
            });
            e.target.classList.add('active');
            
            const language = e.target.getAttribute('data-language');
            
            if (language === 'all') {
                sectionTitle.textContent = 'All Songs';
                displaySongs(allSongs);
            } else {
                sectionTitle.textContent = `${language.charAt(0).toUpperCase() + language.slice(1)} Songs`;
                filterSongsByLanguage(language);
            }
        }
    });
    
    // Filter songs by language
    async function filterSongsByLanguage(language) {
        try {
            const response = await fetch(`/api/songs/language/${language}`);
            const songs = await response.json();
            displaySongs(songs);
        } catch (error) {
            console.error('Error filtering songs:', error);
        }
    }
    
    // Search songs
    searchBtn.addEventListener('click', searchSongs);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchSongs();
        }
    });
    
    function searchSongs() {
        const query = searchInput.value.trim();
        if (query) {
            fetch(`/api/songs/search/${query}`)
                .then(response => response.json())
                .then(songs => {
                    sectionTitle.textContent = `Search Results for "${query}"`;
                    displaySongs(songs);
                })
                .catch(error => {
                    console.error('Error searching songs:', error);
                });
        }
    }
    
    // Initialize the app
    fetchSongs();
});