/**
 * उत्तर दिखाने या छिपाने के लिए फ़ंक्शन
 * @param {number} id - प्रश्न की ID
 */
function toggleAnswer(id) {
    const answer = document.getElementById('answer' + id);
    if (answer) {
        answer.classList.toggle('show');
    }
}

/**
 * स्क्रॉल करने पर एनीमेशन जोड़ना
 */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // सभी सेक्शन्स पर एनीमेशन लागू करना
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});