// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic Greeting (Mock Example)
  const welcomeMessage = document.querySelector('.hero-content h1');
  // const user = "Florence"; // Mock user
  welcomeMessage.textContent = `Welcome, ${user}! Prioritize Your Wellness Today.`;
  