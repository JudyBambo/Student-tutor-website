const slider = document.querySelector('.slider-images');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.2; // scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

// Vertical navigation script on mobile screens

  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const nav = document.querySelector('nav');

  openMenu.addEventListener('click', () => {
    nav.classList.add('active');   // Show nav
    openMenu.style.display = 'none';  // Hide bars
    closeMenu.style.display = 'block'; // Show X
  });

  closeMenu.addEventListener('click', () => {
    nav.classList.remove('active'); // Hide nav
    closeMenu.style.display = 'none'; // Hide X
    openMenu.style.display = 'block'; // Show bars
  });