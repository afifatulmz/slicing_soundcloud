// 1. DATA TEMPLATE
// Silakan ganti teks pada 'title' dan 'artist' di bawah ini
const recentTracks = [
  { title: "I Just Threw Out the Love of My Dreams", artist: "Weezer", coverUrl: "assets/images/weezer.jpg" },
  { title: "Her's", artist: "Harvey", coverUrl: "assets/images/harvey.jpg" },
  { title: "DJ Nate Tresno x Tresno Liyane", artist: "Fikri Makbul", coverUrl: "assets/images/towewew.jpg" },
  { title: "DJ Korban Janji", artist: "Agil Fvnky", coverUrl: "assets/images/album1.jpg" },
  { title: "I Can't Handle Change", artist: "Roar", coverUrl: "assets/images/roar.jpg" },
  { title: "For The First Time", artist: "Mac DeMarco", coverUrl: "assets/images/macdemarco.jpg" }
];

const likedTracks = [
  { title: "Langit Tak Seharusnya Biru", artist: "The Jansen", coverUrl: "assets/images/jansen.jpg" },
  { title: "Love Song", artist: "Grrrl Gang", coverUrl: "assets/images/grrlgang.jpg" },
  { title: "Anomali", artist: "rumahsakit", coverUrl: "assets/images/anomali.jpg" },
  { title: "Her's", artist: "Harvey", coverUrl: "assets/images/harvey.jpg" },
  { title: "Senja Teduh Pelita", artist: "MALIQ & D'Essentials", coverUrl: "assets/images/senja.jpg" },
  { title: "Let It Happen", artist: "Tame Impala", coverUrl: "assets/images/tameimpala.jpg" }
];


// 2. FUNGSI RENDER KE DOM
function renderTracks(data, containerId) {
  const container = document.getElementById(containerId);
  
  // Mencegah error jika id container tidak ditemukan di HTML
  if (!container) return; 

  // Bersihkan isi container terlebih dahulu sebelum dirender
  container.innerHTML = ""; 

  // Looping data dan cetak HTML
  data.forEach(track => {
    const cardHTML = `
      <div class="track-card">
        <div class="track-cover" style="background: url('${track.coverUrl}') center/cover no-repeat; background-color: var(--bg-card);"></div>
        <div class="track-title">${track.title}</div>
        <div class="track-subtitle">${track.artist}</div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// 3. INISIALISASI & EVENT LISTENER (Berjalan saat web dimuat)
document.addEventListener("DOMContentLoaded", () => {
  
  // A. Jalankan fungsi render untuk mengisi grid kosong di HTML
  renderTracks(recentTracks, "recentGrid");
  renderTracks(likedTracks, "likesGrid");

  // B. Interaksi Tombol Play / Pause di Player Bar
  const playBtn = document.getElementById("playBtn");
  if (playBtn) {
    const iconPlay = playBtn.querySelector(".icon-play");
    const iconPause = playBtn.querySelector(".icon-pause");

    playBtn.addEventListener("click", () => {
      // Cek apakah sedang pause (icon play terlihat)
      const isPaused = iconPlay.style.display !== "none";
      
      if (isPaused) {
        iconPlay.style.display = "none";
        iconPause.style.display = "block"; // Munculkan icon pause
      } else {
        iconPlay.style.display = "block";  // Munculkan icon play
        iconPause.style.display = "none";
      }
    });
  }

  // C. Interaksi Tombol Like di Player Bar
  const likeBtn = document.getElementById("likeBtn");
  if (likeBtn) {
    likeBtn.addEventListener("click", () => {
      // Toggle class 'active' yang sudah disiapkan di CSS
      likeBtn.classList.toggle("active");
    });
  }

});