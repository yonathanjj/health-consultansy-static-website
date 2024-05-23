window.addEventListener('scroll', function() {
    let header = document.getElementById('parallax');
    let scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'; // Adjust the speed (0.5) as needed
});
