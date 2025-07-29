// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate numbers in stats section
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                let currentNumber = 0;
                const increment = parseFloat(finalNumber) / 50;
                
                const updateNumber = () => {
                    if (currentNumber < parseFloat(finalNumber)) {
                        currentNumber += increment;
                        if (finalNumber.includes('%')) {
                            target.textContent = Math.floor(currentNumber) + '%';
                        } else if (finalNumber.includes('+')) {
                            target.textContent = Math.floor(currentNumber).toLocaleString() + '+';
                        } else if (finalNumber.includes('★')) {
                            target.textContent = currentNumber.toFixed(1) + '★';
                        } else {
                            target.textContent = Math.floor(currentNumber);
                        }
                        requestAnimationFrame(updateNumber);
                    } else {
                        target.textContent = finalNumber;
                    }
                };
                
                updateNumber();
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(num => observer.observe(num));
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
    
    // Add entrance animations for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    });
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.tomato-clock');
    const speed = 0.5;
    
    parallaxElements.forEach(element => {
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add click tracking for download buttons
document.querySelectorAll('a[href*="github"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track download clicks if analytics is implemented
        console.log('GitHub download clicked');
    });
});