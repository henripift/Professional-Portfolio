const navbar = document.getElementById('navbar');

// Toggle navbar on mobile
function toggleNavbar() {
    if (window.innerWidth <= 768) {
        navbar.classList.toggle('expanded');
    }
}

// Click on navbar to toggle (mobile)
navbar.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        // If clicking on a link, close the menu
        if (e.target.closest('a')) {
            setTimeout(() => {
                navbar.classList.remove('expanded');
            }, 200);
        } else if (!e.target.closest('.nav-links')) {
            // If clicking on toggle area
            toggleNavbar();
        }
    }
});

// Close navbar when clicking outside (mobile)
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && !navbar.contains(e.target) && navbar.classList.contains('expanded')) {
        navbar.classList.remove('expanded');
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('expanded');
        }
    }, 250);
});

// Active link handling
const links = navbar.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Smooth scroll to section
        const targetId = this.getAttribute('href');
        if (targetId !== '#contact') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
