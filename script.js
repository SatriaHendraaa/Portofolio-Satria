window.onload = function() {
    const teksElement = document.getElementById('teks');
    setTimeout(() => {
        teksElement.classList.add('visible');
    }, 1000); // Menunggu 1 detik sebelum animasi dimulai
};

// Tambahkan ke file script.js
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Animate progress bars when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.progress').style.width = 
                    entry.target.querySelector('.skill-percentage').textContent;
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => observer.observe(item));
});

const h1 = document.querySelector('h1');
const texts = ['Front End Developer', 'Designer'];
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    h1.textContent = texts[currentIndex];
}, 1000);