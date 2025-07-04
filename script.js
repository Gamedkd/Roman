function showSurprise() {
  // เล่น confetti
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 }
  });

  // เล่นเสียงพลุ
  const boom = document.getElementById("firework-sound");
  boom.currentTime = 0;
  boom.play();

  // เปิดการ์ด popup
  const popup = document.getElementById("popup-card");
  popup.classList.remove("hidden");

  // เล่นเพลงถ้ายังไม่ได้เล่น
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(() => {
      alert("กรุณาคลิกหน้าจอเพื่อเปิดเสียงเพลง 😊");
    });
  }
}
