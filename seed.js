

const mongoose = require('mongoose');
const Song = require('./models/song');
const connectDB = require('./config/database');

connectDB();

const sampleSongs = [
  // Hindi Songs
  { 
    title: "Tum Hi Ho", 
    language: "hindi", 
    singer: "Arijit Singh", 
    duration: "4:22", 
    filePath: "songs/hindi/Tum Hi Ho.mp3", 
 coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Dekho Dekho kaise", 
    language: "hindi", 
    singer: "Anuv Jain", 
    duration: "3:38", 
    filePath: "songs/hindi/Dekho Dekho kaise.mp3", 
 coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Marham", 
    language: "hindi", 
    singer: "Vishal Mishra,Raj Shekhar", 
    duration: "1:53", 
    filePath: "songs/hindi/Marham.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          },
  { 
    title: "Tera chehra", 
    language: "hindi", 
    singer: "Arijit Singh,Himesh Reshammiya", 
    duration: "4:34", 
    filePath: "songs/hindi/Tera chehra.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          },
  { 
    title: "Nadaaniyan", 
    language: "hindi", 
    singer: "Akshath", 
    duration: "2:49", 
    filePath: "songs/hindi/Nadaaniyan.mp3", 
    coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Jo tum mere ho", 
    language: "hindi", 
    singer: "Anuv Jain", 
    duration: "4:11", 
    filePath: "songs/hindi/Jo tum mere ho.mp3", 
            coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Oonchi oonchi", 
    language: "hindi", 
    singer: "Manan Bharadwaj,Arijit Singh", 
    duration: "4:11", 
    filePath: "songs/hindi/Oonchi oonchi.mp3", 
            coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          },
  { 
    title: "wishes", 
    language: "hindi", 
    singer: "Hasan raheem", 
    duration: "3:43", 
    filePath: "songs/hindi/wishes.mp3", 
            coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Tu hain Toh", 
    language: "hindi", 
    singer: "Hunny,Bunny,Sagar", 
    duration: "4:43", 
    filePath: "songs/hindi/Tu hain Toh.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Tum bin main dekhu to ", 
    language: "hindi", 
    singer: "Bela shende,Ash King", 
    duration: "4:12", 
    filePath: "songs/hindi/Tum bin main dekhu to.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Ve haaniyaan", 
    language: "hindi", 
    singer: "Danny,Avvy sra,sagar", 
    duration: "4:00", 
    filePath: "songs/hindi/Ve haaniyaan.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },

  // Telugu Songs
  { 
    title: "nenu nuvvantu", 
    language: "telugu", 
    singer: "Naresh Iyer", 
    duration: "4:49", 
    filePath: "songs/telugu/nenu nuvvantu.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_1280.png" 
  },
 
  { 
    title: "hey rangule", 
    language: "telugu", 
    singer: "Ramya behra,anurag kulkarni", 
    duration: "3:49", 
    filePath: "songs/telugu/hey rangule.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2024/02/02/22/05/audio-8549150_1280.jpg" 
  },
  { 
    title: "hello rammante", 
    language: "telugu", 
    singer: "Vijay Prakash", 
    duration: "4:44", 
    filePath: "songs/telugu/hello rammante.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2024/12/03/21/33/ai-generated-9243073_1280.jpg" 
  },
  { 
    title: "Gallo Thelinattunde", 
    language: "telugu", 
    singer: "Tippu and Gopika Poornima", 
    duration: "4:52", 
    filePath: "songs/telugu/Gallo Thelinattunde.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Uppenantha", 
    language: "telugu", 
    singer: "AKK, Devi Sri Prasad and balaji", 
    duration: "5:27", 
    filePath: "songs/telugu/Uppenantha.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "bae", 
    language: "telugu", 
    singer: "Adithya Krishnan and Anirudh Ravichander", 
    duration: "4:02", 
    filePath: "songs/telugu/bae.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_1280.jpg" 
  },
 

  // Tamil Songs
  { 
    title: "Why This Kolaveri Di", 
    language: "tamil", 
    singer: "Dhanush", 
    duration: "4:19", 
    filePath: "songs/tamil/why this kolavari.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2024/02/02/22/05/audio-8549150_1280.jpg" 
  },
  { 
    title: "Megham Karukatha", 
    language: "tamil", 
    singer: "Sid Sriram", 
    duration: "4:02", 
    filePath: "songs/tamil/Megam karukatha.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2024/12/03/21/33/ai-generated-9243073_1280.jpg" 
  },
  { 
    title: "Vaathi Coming", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:48", 
    filePath: "songs/tamil/Vaathi coming.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_1280.png" 
  },
  { 
    title: "Jalabulajangu", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:29", 
    filePath: "songs/tamil/Jalabulajangu.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Halamathi Habibo", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:26", 
    filePath: "songs/tamil/Halamathi Habibo.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  
  { 
    title: "Once Upon a Time", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "4:02", 
    filePath: "songs/tamil/Once upon a time.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2021/11/09/21/29/sculpture-6782450_1280.jpg" 
  },
  { 
    title: "Vikram Title Track", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:38", 
    filePath: "songs/tamil/Vikram title track.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2024/12/03/21/33/ai-generated-9243073_1280.jpg" 
  },
  { 
    title: "Beast Mode", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "4:10", 
    filePath: "songs/tamil/Beast mode.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2024/02/02/22/05/audio-8549150_1280.jpg" 
  },
  { 
    title: "Dippam Dappam", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:29", 
    filePath: "songs/tamil/Dippam Dippam.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_1280.png" 
  },
//devotional
 { 
    title: "Acchutam keshavam", 
    language: "devotional", 
    singer: "shailaja Mishra", 
    duration: "5:54", 
    filePath: "songs/devotional/Acchutam keshavam.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2016/11/18/13/53/idol-1834688_1280.jpg" 
  },
   { 
    title: "Tum prem ho", 
    language: "devotional", 
    singer: "surya raj kamal, mohit lalwani , aishwarya anand", 
    duration: "6:47", 
    filePath: "songs/devotional/Tum prem ho.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_1280.jpg" 
  },
   { 
    title: "meri maa ke barabar koi nahi", 
   language: "devotional",  
   singer : "jubin nautiyal",
    duration: "4:58", 
    filePath: "songs/devotional/mere ma ke barabar.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2017/12/11/22/42/peacock-feathers-3013486_1280.jpg" 
  },
   { 
   title: "Govind girdhari",  
    language: "devotional",
    singer: "Amit Gupta", 
    duration: "3:36", 
    filePath: "songs/devotional/Goving girdari.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2019/02/22/19/14/hare-krishna-4014209_1280.jpg" 
  },
   { 
    title: "Kanha mere", 
    language: "devotional",
    singer: "soham naik", 
    duration: "3:22", 
    filePath: "songs/devotional/Kanha mere.mp3", 
    coverImage: "https://cdn.pixabay.com/photo/2018/08/18/11/08/lord-3614576_1280.jpg" 
  },

  // English Songs
  { 
    title: "Blinding Lights", 
    language: "english", 
    singer: "The Weeknd", 
    duration: "3:20", 
    filePath: "songs/english/blind lights.mp3", 
            coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Shape of You", 
    language: "english", 
    singer: "Ed Sheeran", 
    duration: "3:53", 
    filePath: "songs/english/Shape Of You.mp3", 
            coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Dance Monkey", 
    language: "english", 
    singer: "Tones and I", 
    duration: "3:29", 
    filePath: "songs/english/Tones and I - Dance Monkey.mp3", 
            coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Don't Start Now", 
    language: "english", 
    singer: "Dua Lipa", 
    duration: "3:03", 
    filePath: "songs/english/Don't Start Now.mp3dont_start_now.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Bad Guy", 
    language: "english", 
    singer: "Billie Eilish", 
    duration: "3:14", 
    filePath: "songs/english/Bad Guy.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Lovely", 
    language: "english", 
    singer: "Billie Eilish", 
    duration: "4:30", 
    filePath: "songs/english/Billie Eilish_ Khalid - lovely(MP3_160K).mp3", 
            coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "XXXTENTACION - Hope", 
    language: "english", 
    singer: "XXXTENTACION", 
    duration: "4:41", 
    filePath: "songs/english/XXXTENTACION - Hope_6.mp3", 
            coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Dandelions", 
    language: "english", 
    singer: "Ruth B", 
    duration: "4:55", 
    filePath: "/songs/english/Ruth_B_-_Dandelions.mp3", 
            coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Senorita", 
    language: "english", 
    singer: "Shawn Mendes, Camila Cabello", 
    duration: "3:10", 
    filePath: "songs/english/Shawn Mendes, Camila Cabello - Señorita_160k.mp3", 
            coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Perfect", 
    language: "english", 
    singer: "LEd Sheeran", 
    duration: "3:47", 
    filePath: "songs/english/Ed Sheeran - Perfect.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },

  // Spanish Songs
  { 
    title: "Despacito", 
    language: "spanish", 
    singer: "Luis Fonsi", 
    duration: "3:47", 
    filePath: "songs/spanish/Despacito - Luis Fonsi ! Daddy Yankee.mp3", 
            coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Bailando", 
    language: "spanish", 
    singer: "Enrique Iglesias", 
    duration: "4:03", 
    filePath: "songs/spanish/Bailando.mp3", 
            coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
 
  { 
    title: "Taki Taki", 
    language: "spanish", 
    singer: "DJ Snake", 
    duration: "3:32", 
    filePath: "songs/spanish/taki taki.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Gata only", 
    language: "spanish", 
    singer: "Marc Anthony", 
    duration: "3:41", 
    filePath: "songs/spanish/Gata Only - PagalWorld.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "X-remix", 
    language: "spanish", 
    singer: "Nicky Jam", 
    duration: "2:53", 
    filePath: "songs/spanish/nicky-jam-x.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  
  // Punjabi Songs
  { 
    title: "Brown Munde", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "4:14", 
    filePath: "songs/punjabi/brown munde.mp3", 
            coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Insane", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "3:26", 
    filePath: "songs/punjabi/insane.mp3", 
            coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Dil Nu", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "3:53", 
    filePath: "songs/punjabi/Dil nu.mp3", 
            coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Excuses", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "2:56", 
    filePath: "songs/punjabi/Excuses.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Tere Te", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "3:47", 
    filePath: "songs/punjabi/Tere te.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Lehanga", 
    language: "punjabi", 
    singer: "Jass Manak", 
    duration: "3:10", 
    filePath: "songs/punjabi/Lehanga.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Sira E Hou", 
    language: "punjabi", 
    singer: "Amrit Maan", 
    duration: "3:20", 
    filePath: "songs/punjabi/Sira E ho.mp3", 
            coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Qismat", 
    language: "punjabi", 
    singer: "Ammy Virk", 
    duration: "3:46", 
    filePath: "songs/punjabi/Quismat.mp3", 
            coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Proper Patola", 
    language: "punjabi", 
    singer: "Diljit Dosanjh", 
    duration: "2:42", 
     filePath: "songs/punjabi/Proper patola.mp3", 
            coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
    
  { 
    title: "Lamberghini", 
    language: "punjabi", 
    singer: "The Doorbeen", 
    duration: "3:10", 
    filePath: "songs/punjabi/Lamberghini.mp3", 
            coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  }


];

async function seedDatabase() {
  try {
    await Song.deleteMany({});
    await Song.insertMany(sampleSongs);
    console.log('Sample songs inserted successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();