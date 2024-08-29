

// JavaScript for responsive menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle menu visibility
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth scrolling and hide navbar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Hide navbar after clicking
            navbar.classList.remove('active');
        });
    });

    // Highlight the active link based on scroll
    const sections = document.querySelectorAll('section');
    window.onscroll = () => {
        const top = window.scrollY + 50; // Adjust offset as needed

        sections.forEach(sec => {
            const offset = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Sticky header functionality
        const header = document.querySelector('.header');
        if (window.scrollY > 50) { // Adjust scroll position as needed
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
});



// Loading Effects
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Match this duration with the CSS transition time
});



function openModal(modalId) {
    const modal = document.getElementById(modalId + '-modal');
    const modalContent = modal.querySelector('.modal-content');
    modal.classList.add('show');
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10); // Small delay for transition effect
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId + '-modal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show');
    setTimeout(() => {
        modal.classList.remove('show');
    }, 300); // Delay for transition effect
}

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}




