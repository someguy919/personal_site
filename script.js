console.log("hello world")



//Code to make menu hover images hidden until animation finishes
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
      const videoLinks = document.querySelectorAll('.video-link');
      videoLinks.forEach(link => {
        link.classList.add('activate-hover');
      });
    }, 5000); 
  });

//Display current date and time
  document.addEventListener('DOMContentLoaded', (event) => {
    const lastLoginDateElement = document.getElementById('last-login-date');
    const currentDate = new Date();
    lastLoginDateElement.textContent = currentDate.toLocaleString()
});
