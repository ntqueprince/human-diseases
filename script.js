// ========== EYE BUTTON TOGGLE FUNCTIONALITY ==========
function toggleAnswer(button) {
    // Find the answer element (next sibling of the button's parent)
    const fibItem = button.closest('.fib-item');
    const answer = fibItem.querySelector('.fib-answer');

    // Toggle the 'show' class
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        button.style.transform = 'scale(1)';
    } else {
        answer.classList.add('show');
        button.style.transform = 'scale(1.1)';
    }
}

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Check if target exists
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ========== MCQ SELECTION HIGHLIGHT ==========
document.addEventListener('DOMContentLoaded', function () {
    // Quiz Validation Logic (MCQ & True/False)
    const allQuizInputs = document.querySelectorAll('.options input[type="radio"], .tf-options input[type="radio"]');

    allQuizInputs.forEach(input => {
        input.addEventListener('change', function () {
            const parentContainer = this.closest('.options') || this.closest('.tf-options');
            const allLabels = parentContainer.querySelectorAll('label');
            const correctInput = parentContainer.querySelector('input[data-correct="true"]');

            // Reset styles disabled for persistent feedback, 
            // but we can ensure only one "selected" look if we want.
            // For educational quizzes, showing Right/Wrong immediately is best.

            allLabels.forEach(label => {
                // Reset basic styles
                label.style.background = 'white';
                label.style.borderColor = '#e0e0e0';
                label.style.color = 'inherit';
            });

            const selectedLabel = this.closest('label');

            if (this.dataset.correct === "true") {
                // Correct Answer
                selectedLabel.style.background = '#e8f5e9'; // Green bg
                selectedLabel.style.borderColor = '#4caf50'; // Green border
                selectedLabel.style.color = '#2e7d32'; // Dark green text
            } else {
                // Wrong Answer
                selectedLabel.style.background = '#ffebee'; // Red bg
                selectedLabel.style.borderColor = '#ef5350'; // Red border
                selectedLabel.style.color = '#c62828'; // Red text

                // Highlight the correct one so they learn
                if (correctInput) {
                    const correctLabel = correctInput.closest('label');
                    correctLabel.style.background = '#e8f5e9';
                    correctLabel.style.borderColor = '#4caf50';
                    correctLabel.style.color = '#2e7d32';
                }
            }
        });
    });
});

// ========== SCROLL ANIMATION FOR SECTIONS ==========
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // section.style.opacity = '0'; // Commented out to ensure visibility
        // section.style.transform = 'translateY(20px)'; // Commented out
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ========== BACK TO TOP BUTTON ==========
document.addEventListener('DOMContentLoaded', function () {
    // Create back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '⬆️';
    backToTopButton.className = 'back-to-top';

    // Apply styles via JS (or improved in CSS)
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(backToTopButton);

    // Show/Hide button on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
