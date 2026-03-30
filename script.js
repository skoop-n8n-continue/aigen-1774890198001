document.addEventListener('DOMContentLoaded', () => {
    // Inject the generated images dynamically to keep HTML clean or they could be hardcoded
    const imageUrls = {
        'img-hot': 'https://skoop-dev-code-agent.s3.us-east-1.amazonaws.com/n8n-continue%2Faigen-1774890198001%2Fassets%2Fhot_coffee_aesthetic-1774890403128.png',
        'img-iced': 'https://skoop-dev-code-agent.s3.us-east-1.amazonaws.com/n8n-continue%2Faigen-1774890198001%2Fassets%2Ficed_coffee_aesthetic-1774890426744.png',
        'img-pastries': 'https://skoop-dev-code-agent.s3.us-east-1.amazonaws.com/n8n-continue%2Faigen-1774890198001%2Fassets%2Fpastry_aesthetic-1774890450102.png'
    };

    // Set images
    Object.keys(imageUrls).forEach(id => {
        const imgEl = document.getElementById(id);
        if (imgEl) {
            imgEl.src = imageUrls[id] + '?v=' + Math.random().toString(36).substring(7); // simple cache buster
        }
    });

    // Slideshow Logic
    const slides = document.querySelectorAll('.menu-slide');
    const dots = document.querySelectorAll('.progress-dot');
    let currentIndex = 0;
    const slideDuration = 12000; // 12 seconds per slide

    function showSlide(index) {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Initialize slideshow
    setInterval(nextSlide, slideDuration);

    // Initial display
    showSlide(currentIndex);
});
