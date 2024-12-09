let timerInterval;
let isTimerRunning = false;
let timerSeconds = 0;

function startTimer() {
  if (isTimerRunning) return;
  
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
    updateProgressBar();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 0;
  updateTimerDisplay();
  updateProgressBar();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  document.querySelector('.timer-display p').textContent = `Timer: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateProgressBar() {
  const progress = (timerSeconds % 60) * 100 / 60;  // Update progress bar based on seconds
  document.querySelector('.progress-bar div').style.width = progress + '%';
}

function changeVideo(videoPath) {
  const videoElement = document.getElementById('calming-video');
  videoElement.src = videoPath;
  videoElement.play();
}

function getNewQuote() {
  const quotes = [
    "You are enough, just as you are.",
    "Inhale confidence, exhale doubt.",
    "Breathe deeply and let go of negativity.",
    "Every moment is a fresh beginning."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = `"${randomQuote}"`;
}

function changeMood(mood) {
  const instructions = {
    stressed: "Take a moment to breathe deeply. Focus on your breath and let the tension melt away.",
    anxious: "Visualize a peaceful place, focus on your breathing, and let go of your worries.",
    relaxed: "You are doing great. Focus on the present moment and allow yourself to just be.",
    focused: "Stay grounded in the moment. Focus on your breathing and let go of distractions."
  };
  document.getElementById('mood-instruction').textContent = instructions[mood];
}
