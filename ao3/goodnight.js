function playSound(hehe) {

  const audio = new Audio(hehe);
  audio.volume = 0.3;
  audio.play();
  return false; // Prevents the link from navigating
  
}