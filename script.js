document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.enter').addEventListener('click', function() {
      // Add class to body to trigger the slide-up animation
      document.body.classList.add('slide-up');
  
      // After the animation duration (1 second), redirect to second.html
      setTimeout(function() {
        window.location.href = 'second.html'; // Redirect to second.html
      }, 1000); // Duration matches the animation
    });
  });
  