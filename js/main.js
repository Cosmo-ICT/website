document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Map Modal Functionality
    const modal = document.getElementById("mapModal");
    const links = document.querySelectorAll('a[href="#map-popup"]');
    const span = document.getElementsByClassName("close")[0];

    if (modal && links.length > 0 && span) {
        // Open modal
        links.forEach(function (link) {
            link.onclick = function (event) {
                event.preventDefault();
                modal.style.display = "block";
            }
        });

        // Close modal on x click
        span.onclick = function () {
            modal.style.display = "none";
        }

        // Close modal on outside click
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});
