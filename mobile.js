// Mobile Optimization JavaScript

class MobileOptimizer {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.isTouch = 'ontouchstart' in window;
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupMobileTestimonials();
        this.setupMobileScrolling();
        this.setupMobileInteractions();
        this.handleOrientationChange();
    }

    setupMobileNavigation() {
        if (!this.isMobile) return;

        const mobileMenuBtn = document.querySelector('[onclick="toggleMobileMenu()"]');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            // Prevent body scroll when menu is open
            window.toggleMobileMenu = () => {
                const isActive = mobileMenu.classList.contains('active');
                mobileMenu.classList.toggle('active');
                document.body.style.overflow = isActive ? 'auto' : 'hidden';
            };

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (mobileMenu.classList.contains('active') && 
                    !mobileMenu.contains(e.target) && 
                    !mobileMenuBtn.contains(e.target)) {
                    window.toggleMobileMenu();
                }
            });
        }
    }

    setupMobileTestimonials() {
        const testimonialsWrapper = document.getElementById('testimonialsWrapper');
        if (!testimonialsWrapper) return;

        let currentIndex = 0;
        let direction = 1;
        const totalCards = document.querySelectorAll('.testimonial-card').length;

        const updateSlider = (index) => {
            if (this.isMobile) {
                const translateX = -(index * 10);
                testimonialsWrapper.style.transform = `translateX(${translateX}%)`;
            }
        };

        // Auto-advance every 3 seconds with backwards when done
        setInterval(() => {
            if (direction === 1) {
                currentIndex++;
                if (currentIndex >= totalCards - 1) {
                    direction = -1;
                }
            } else {
                currentIndex--;
                if (currentIndex <= 0) {
                    direction = 1;
                }
            }
            updateSlider(currentIndex);
        }, 3000);

        updateSlider(0);
    }

    setupMobileScrolling() {
        if (!this.isMobile) return;

        // Smooth scroll for mobile navigation links
        const navLinks = document.querySelectorAll('.nav-link-mobile');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    if (window.toggleMobileMenu) {
                        window.toggleMobileMenu();
                    }
                }
            });
        });

        // Enhanced scroll to top for mobile
        const scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTopBtn) {
            let scrollTimeout;
            
            window.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const scrolled = window.pageYOffset > 300;
                    scrollTopBtn.classList.toggle('visible', scrolled);
                }, 100);
            });
        }
    }

    setupMobileInteractions() {
        if (!this.isMobile) return;

        // Optimize button interactions for mobile
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
        buttons.forEach(button => {
            button.addEventListener('touchstart', () => {
                button.style.transform = 'scale(0.95)';
            }, { passive: true });
            
            button.addEventListener('touchend', () => {
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
            }, { passive: true });
        });

        // Optimize card interactions
        const cards = document.querySelectorAll('.project-card, .team-card, .feature-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'translateY(-2px)';
            }, { passive: true });
            
            card.addEventListener('touchend', () => {
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            }, { passive: true });
        });

        // Prevent zoom on double tap for form inputs
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('touchend', (e) => {
                e.preventDefault();
                input.focus();
            });
        });
    }

    handleOrientationChange() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Recalculate dimensions after orientation change
                this.isMobile = window.innerWidth <= 768;
                
                // Refresh testimonials if needed
                if (this.isMobile) {
                    const testimonialsWrapper = document.getElementById('testimonialsWrapper');
                    if (testimonialsWrapper) {
                        testimonialsWrapper.style.transform = 'translateX(0%)';
                    }
                }
                
                // Adjust viewport height
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }, 500);
        });
    }

    // Utility methods
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Performance optimizations for mobile
class MobilePerformance {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.optimizeAnimations();
        this.setupIntersectionObserver();
    }

    optimizeImages() {
        // Lazy load images on mobile
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }

    optimizeAnimations() {
        // Reduce animations on mobile for better performance
        if (window.innerWidth <= 768) {
            const style = document.createElement('style');
            style.textContent = `
                * {
                    animation-duration: 0.3s !important;
                    transition-duration: 0.3s !important;
                }
                .floating-elements {
                    display: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupIntersectionObserver() {
        // Animate elements when they come into view
        const animateElements = document.querySelectorAll('.project-card, .team-card, .feature-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            observer.observe(el);
        });
    }
}

// Initialize mobile optimizations
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        new MobileOptimizer();
        new MobilePerformance();
        
        // Set viewport height variable for mobile
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
});

// Handle resize events
window.addEventListener('resize', MobileOptimizer.debounce(() => {
    if (window.innerWidth <= 768) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}, 250));