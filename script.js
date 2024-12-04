// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('.enter').addEventListener('click', function () {
//     // Add class to body to trigger the slide-up animation
//     document.body.classList.add('slide-up');

//     // After the animation duration (1 second), redirect to second.html
//     setTimeout(function () {
//       window.location.href = 'second.html'; // Redirect to second.html
//     }, 1000); // Duration matches the animation
//   });
// });

var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
  gsap.to(cursor, {
    x: e.pageX,
    y: e.pageY,
    duration: 0.01, // Animation duration
    ease: 'elastic.out(1, 0.1)', // Elastic easing effect
  });
});

var button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
  cursor.style.transform = 'scale(0.5) translate(-90%, -80%)';
  cursor.style.cursor = 'none !important';
  cursor.style.filter = 'invert(1);';
});

button.addEventListener('mouseleave', () => {
  cursor.style.transform = 'scale(1) translate(-60%, -50%)';
});
