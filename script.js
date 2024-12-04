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
  // Update the position of the circle based on mouse coordinates
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
  console.log(e);
});

var button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
  cursor.style.transform = 'scale(0.5) translate(-90%, -80%)';
  cursor.style.cursor = 'none !important';
});

// Mouse leaves the button
button.addEventListener('mouseleave', () => {
  cursor.style.transform = 'scale(1) translate(-60%, -50%)';
});
