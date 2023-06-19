window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var header = document.querySelector('header');
    var stickyThreshold = navbar.offsetHeight; // Adjust this based on your header's height
  
    if (window.pageYOffset >= stickyThreshold) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  