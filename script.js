document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.card, .step, .showcase-info, .showcase-image, .diff-content');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Modal Logic
    const modal = document.getElementById("caseStudyModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close-modal")[0];

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
    
    window.addEventListener("focus", () => {
        document.title = docTitle;
    });

});
