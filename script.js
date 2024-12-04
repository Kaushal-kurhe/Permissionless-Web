document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.enter').addEventListener('click', function () {
    // Add class to body to trigger the slide-up animation
    document.body.classList.add('slide-up');

    // After the animation duration (1 second), redirect to second.html
    setTimeout(function () {
      window.location.href = 'second.html'; // Redirect to second.html
    }, 1000); // Duration matches the animation
  });
});

var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

var button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
  cursor.style.transform = 'scale(0.5) translate(-90%, -80%)';
  cursor.style.cursor = 'none !important';
});

button.addEventListener('mouseleave', () => {
  cursor.style.transform = 'scale(1) translate(-60%, -50%)';
});
