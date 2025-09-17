

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
    coverImage: "/images/hindi/tum_hi_ho.jpg" 
  },
  { 
    title: "Dekho Dekho kaise", 
    language: "hindi", 
    singer: "Anuv Jain", 
    duration: "3:38", 
    filePath: "songs/hindi/Dekho Dekho kaise.mp3", 
    coverImage: "/images/hindi/channa_mereya.jpg" 
  },
  { 
    title: "Marham", 
    language: "hindi", 
    singer: "Vishal Mishra,Raj Shekhar", 
    duration: "1:53", 
    filePath: "songs/hindi/Marham.mp3", 
    coverImage: "/images/hindi/kal_ho_naa_ho.jpg" 
  },
  { 
    title: "Tera chehra", 
    language: "hindi", 
    singer: "Arijit Singh,Himesh Reshammiya", 
    duration: "4:34", 
    filePath: "songs/hindi/Tera chehra.mp3", 
    coverImage: "/images/hindi/tera_ban_jaunga.jpg" 
  },
  { 
    title: "Nadaaniyan", 
    language: "hindi", 
    singer: "Akshath", 
    duration: "2:49", 
    filePath: "songs/hindi/Nadaaniyan.mp3", 
    coverImage: "/images/hindi/raabta.jpg" 
  },
  { 
    title: "Jo tum mere ho", 
    language: "hindi", 
    singer: "Anuv Jain", 
    duration: "4:11", 
    filePath: "songs/hindi/Jo tum mere ho.mp3", 
    coverImage: "/images/hindi/ae_dil_hai_mushkil.jpg" 
  },
  { 
    title: "Oonchi oonchi", 
    language: "hindi", 
    singer: "Manan Bharadwaj,Arijit Singh", 
    duration: "4:11", 
    filePath: "songs/hindi/Oonchi oonchi.mp3", 
    coverImage: "/images/hindi/gerua.jpg" 
  },
  { 
    title: "wishes", 
    language: "hindi", 
    singer: "Hasan raheem", 
    duration: "3:43", 
    filePath: "songs/hindi/wishes.mp3", 
    coverImage: "/images/hindi/janam_janam.jpg" 
  },
  { 
    title: "Tu hain Toh", 
    language: "hindi", 
    singer: "Hunny,Bunny,Sagar", 
    duration: "4:43", 
    filePath: "songs/hindi/Tu hain Toh.mp3", 
    coverImage: "/images/hindi/phir_bhi_tumko_chaahunga.jpg" 
  },
  { 
    title: "Tum bin main dekhu to ", 
    language: "hindi", 
    singer: "Bela shende,Ash King", 
    duration: "4:12", 
    filePath: "songs/hindi/Tum bin main dekhu to.mp3", 
    coverImage: "/images/hindi/hawayein.jpg" 
  },
  { 
    title: "Ve haaniyaan", 
    language: "hindi", 
    singer: "Danny,Avvy sra,sagar", 
    duration: "4:00", 
    filePath: "songs/hindi/Ve haaniyaan.mp3", 
    coverImage: "/images/hindi/hawayein.jpg" 
  },

  // Telugu Songs
  { 
    title: "nenu nuvvantu", 
    language: "telugu", 
    singer: "Naresh Iyer", 
    duration: "4:49", 
    filePath: "songs/telugu/nenu nuvvantu.mp3", 
    coverImage: "/images/telugu/butta_bomma.jpg" 
  },
 
  { 
    title: "hey rangule", 
    language: "telugu", 
    singer: "Ramya behra,anurag kulkarni", 
    duration: "3:49", 
    filePath: "songs/telugu/hey rangule.mp3", 
    coverImage: "/images/telugu/inkem_inkem.jpg" 
  },
  { 
    title: "hello rammante", 
    language: "telugu", 
    singer: "Vijay Prakash", 
    duration: "4:44", 
    filePath: "songs/telugu/hello rammante.mp3", 
    coverImage: "/images/telugu/o_rendu_prema_meghaalila.jpg" 
  },
  { 
    title: "Gallo Thelinattunde", 
    language: "telugu", 
    singer: "Tippu and Gopika Poornima", 
    duration: "4:52", 
    filePath: "songs/telugu/Gallo Thelinattunde.mp3", 
    coverImage: "/images/telugu/naa_ready.jpg" 
  },
  { 
    title: "Uppenantha", 
    language: "telugu", 
    singer: "AKK, Devi Sri Prasad and balaji", 
    duration: "5:27", 
    filePath: "songs/telugu/Uppenantha.mp3", 
    coverImage: "/images/telugu/ramuloo_ramulaa.jpg" 
  },
  { 
    title: "bae", 
    language: "telugu", 
    singer: "Adithya Krishnan and Anirudh Ravichander", 
    duration: "4:02", 
    filePath: "songs/telugu/bae.mp3", 
    coverImage: "/images/telugu/seetimaar.jpg" 
  },
 

  // Tamil Songs
  { 
    title: "Why This Kolaveri Di", 
    language: "tamil", 
    singer: "Dhanush", 
    duration: "4:19", 
    filePath: "songs/tamil/why this kolavari.mp3", 
    coverImage: "/images/tamil/why_this_kolaveri_di.jpg" 
  },
  { 
    title: "Megham Karukatha", 
    language: "tamil", 
    singer: "Sid Sriram", 
    duration: "4:02", 
    filePath: "songs/tamil/Megam karukatha.mp3", 
    coverImage: "/images/tamil/megham_karukatha.jpg" 
  },
  { 
    title: "Vaathi Coming", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:48", 
    filePath: "songs/tamil/Vaathi coming.mp3", 
    coverImage: "/images/tamil/vaathi_coming.jpg" 
  },
  { 
    title: "Jalabulajangu", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:29", 
    filePath: "songs/tamil/Jalabulajangu.mp3", 
    coverImage: "/images/tamil/jalabulajangu.jpg" 
  },
  { 
    title: "Halamathi Habibo", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:26", 
    filePath: "songs/tamil/Halamathi Habibo.mp3", 
    coverImage: "/images/tamil/halamathi_habibo.jpg" 
  },
  
  { 
    title: "Once Upon a Time", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "4:02", 
    filePath: "songs/tamil/Once upon a time.mp3", 
    coverImage: "/images/tamil/once_upon_a_time.jpg" 
  },
  { 
    title: "Vikram Title Track", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:38", 
    filePath: "songs/tamil/Vikram title track.mp3", 
    coverImage: "/images/tamil/vikram_title_track.jpg" 
  },
  { 
    title: "Beast Mode", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "4:10", 
    filePath: "songs/tamil/Beast mode.mp3", 
    coverImage: "/images/tamil/beast_mode.jpg" 
  },
  { 
    title: "Dippam Dappam", 
    language: "tamil", 
    singer: "Anirudh Ravichander", 
    duration: "3:29", 
    filePath: "songs/tamil/Dippam Dippam.mp3", 
    coverImage: "/images/tamil/dippam_dappam.jpg" 
  },
//devotional
 { 
    title: "Acchutam keshavam", 
    language: "devotional", 
    singer: "shailaja Mishra", 
    duration: "5:54", 
    filePath: "songs/devotional/Acchutam keshavam.mp3", 
    coverImage: "/images/english/blinding_lights.jpg" 
  },
   { 
    title: "Tum prem ho", 
    language: "devotional", 
    singer: "surya raj kamal, mohit lalwani , aishwarya anand", 
    duration: "6:47", 
    filePath: "songs/devotional/Tum prem ho.mp3", 
    coverImage: "/images/english/blinding_lights.jpg" 
  },
   { 
    title: "meri maa ke barabar koi nahi", 
   language: "devotional",  
   singer : "jubin nautiyal",
    duration: "4:58", 
    filePath: "songs/devotional/mere ma ke barabar.mp3", 
    coverImage: "/images/english/blinding_lights.jpg" 
  },
   { 
   title: "Govind girdhari",  
    language: "devotional",
    singer: "Amit Gupta", 
    duration: "3:36", 
    filePath: "songs/devotional/Goving girdari.mp3", 
    coverImage: "/images/english/blinding_lights.jpg" 
  },
   { 
    title: "Kanha mere", 
    language: "devotional",
    singer: "soham naik", 
    duration: "3:22", 
    filePath: "songs/devotional/Kanha mere.mp3", 
    coverImage: "/images/english/blinding_lights.jpg" 
  },

  // English Songs
  { 
    title: "Blinding Lights", 
    language: "english", 
    singer: "The Weeknd", 
    duration: "3:20", 
    filePath: "songs/english/blind lights.mp3", 
    coverImage: "/images/english/blinding_lights.jpg" 
  },
  { 
    title: "Shape of You", 
    language: "english", 
    singer: "Ed Sheeran", 
    duration: "3:53", 
    filePath: "songs/english/Shape Of You.mp3", 
    coverImage: "/images/english/shape_of_you.jpg" 
  },
  { 
    title: "Dance Monkey", 
    language: "english", 
    singer: "Tones and I", 
    duration: "3:29", 
    filePath: "songs/english/Tones and I - Dance Monkey.mp3", 
    coverImage: "/images/english/dance_monkey.jpg" 
  },
  { 
    title: "Don't Start Now", 
    language: "english", 
    singer: "Dua Lipa", 
    duration: "3:03", 
    filePath: "songs/english/Don't Start Now.mp3dont_start_now.mp3", 
    coverImage: "/images/english/dont_start_now.jpg" 
  },
  { 
    title: "Bad Guy", 
    language: "english", 
    singer: "Billie Eilish", 
    duration: "3:14", 
    filePath: "songs/english/Bad Guy.mp3", 
    coverImage: "/images/english/bad_guy.jpg" 
  },
  { 
    title: "Lovely", 
    language: "english", 
    singer: "Billie Eilish", 
    duration: "4:30", 
    filePath: "songs/english/Billie Eilish_ Khalid - lovely(MP3_160K).mp3", 
    coverImage: "/images/english/uptown_funk.jpg" 
  },
  { 
    title: "XXXTENTACION - Hope", 
    language: "english", 
    singer: "XXXTENTACION", 
    duration: "4:41", 
    filePath: "songs/english/XXXTENTACION - Hope_6.mp3", 
    coverImage: "/images/english/thinking_out_loud.jpg" 
  },
  { 
    title: "Dandelions", 
    language: "english", 
    singer: "Ruth B", 
    duration: "4:55", 
    filePath: "/songs/english/Ruth_B_-_Dandelions.mp3", 
    coverImage: "/images/english/hello.jpg" 
  },
  { 
    title: "Senorita", 
    language: "english", 
    singer: "Shawn Mendes, Camila Cabello", 
    duration: "3:10", 
    filePath: "songs/english/Shawn Mendes, Camila Cabello - Señorita_160k.mp3", 
    coverImage: "/images/english/senorita.jpg" 
  },
  { 
    title: "Perfect", 
    language: "english", 
    singer: "LEd Sheeran", 
    duration: "3:47", 
    filePath: "songs/english/Ed Sheeran - Perfect.mp3", 
    coverImage: "/images/english/despacito.jpg" 
  },

  // Spanish Songs
  { 
    title: "Despacito", 
    language: "spanish", 
    singer: "Luis Fonsi", 
    duration: "3:47", 
    filePath: "songs/spanish/Despacito - Luis Fonsi ! Daddy Yankee.mp3", 
    coverImage: "/images/spanish/despacito.jpg" 
  },
  { 
    title: "Bailando", 
    language: "spanish", 
    singer: "Enrique Iglesias", 
    duration: "4:03", 
    filePath: "songs/spanish/Bailando.mp3", 
    coverImage: "/images/spanish/bailando.jpg" 
  },
 
  { 
    title: "Taki Taki", 
    language: "spanish", 
    singer: "DJ Snake", 
    duration: "3:32", 
    filePath: "songs/spanish/taki taki.mp3", 
    coverImage: "/images/spanish/taki_taki.jpg" 
  },
  { 
    title: "Gata only", 
    language: "spanish", 
    singer: "Marc Anthony", 
    duration: "3:41", 
    filePath: "songs/spanish/Gata Only - PagalWorld.mp3", 
    coverImage: "/images/spanish/vivir_mi_vida.jpg" 
  },
  { 
    title: "X-remix", 
    language: "spanish", 
    singer: "Nicky Jam", 
    duration: "2:53", 
    filePath: "songs/spanish/nicky-jam-x.mp3", 
    coverImage: "/images/spanish/la_tortura.jpg" 
  },
  
  // Punjabi Songs
  { 
    title: "Brown Munde", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "4:14", 
    filePath: "songs/punjabi/brown munde.mp3", 
    coverImage: "/images/punjabi/brown_munde.jpg" 
  },
  { 
    title: "Insane", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "3:26", 
    filePath: "songs/punjabi/insane.mp3", 
    coverImage: "/images/punjabi/insane.jpg" 
  },
  { 
    title: "Dil Nu", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "3:53", 
    filePath: "songs/punjabi/Dil nu.mp3", 
    coverImage: "/images/punjabi/dil_nu.jpg" 
  },
  { 
    title: "Excuses", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "2:56", 
    filePath: "songs/punjabi/Excuses.mp3", 
    coverImage: "/images/punjabi/excuses.jpg" 
  },
  { 
    title: "Tere Te", 
    language: "punjabi", 
    singer: "AP Dhillon", 
    duration: "3:47", 
    filePath: "songs/punjabi/Tere te.mp3", 
    coverImage: "/images/punjabi/tere_te.jpg" 
  },
  { 
    title: "Lehanga", 
    language: "punjabi", 
    singer: "Jass Manak", 
    duration: "3:10", 
    filePath: "songs/punjabi/Lehanga.mp3", 
    coverImage: "/images/punjabi/lehanga.jpg" 
  },
  { 
    title: "Sira E Hou", 
    language: "punjabi", 
    singer: "Amrit Maan", 
    duration: "3:20", 
    filePath: "songs/punjabi/Sira E ho.mp3", 
    coverImage: "/images/punjabi/sira_e_hou.jpg" 
  },
  { 
    title: "Qismat", 
    language: "punjabi", 
    singer: "Ammy Virk", 
    duration: "3:46", 
    filePath: "songs/punjabi/Quismat.mp3", 
    coverImage: "/images/punjabi/qismat.jpg" 
  },
  { 
    title: "Proper Patola", 
    language: "punjabi", 
    singer: "Diljit Dosanjh", 
    duration: "2:42", 
     filePath: "songs/punjabi/Proper patola.mp3", 
    coverImage: "/images/punjabi/qismat.jpg" 
  },
    
  { 
    title: "Lamberghini", 
    language: "punjabi", 
    singer: "The Doorbeen", 
    duration: "3:10", 
    filePath: "songs/punjabi/Lamberghini.mp3", 
    coverImage: "/images/punjabi/lamberghini.jpg" 
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