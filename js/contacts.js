/** @type {any} */
const emailjs = window.emailjs;

document.addEventListener('DOMContentLoaded', function() {
    // @ts-ignore
    emailjs.init('1gfvPD48p-TmqLQ2r');
    // Animate cards on page load
    const cards = document.querySelectorAll('.contact-card');
    
    cards.forEach(card => {
        const delay = card.getAttribute('data-delay') || 0;
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.8s ease forwards';
        }, delay);
    });
    
    // Modal functionality
    const modal = document.getElementById('contactModal');
    const buttons = document.querySelectorAll('.contact-button');
    const closeBtn = document.querySelector('.close-modal');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the card title to customize the modal
            const cardTitle = this.closest('.card-content').querySelector('.card-title').textContent;
            document.querySelector('.modal-title').textContent = `Contact Us - ${cardTitle}`;
            
            // Show modal with animation
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Add button press effect
            this.classList.add('pressed');
            setTimeout(() => {
                this.classList.remove('pressed');
            }, 200);
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 300);
    }
    
    // Form submission with EmailJS
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Update button state
    const submitButton = document.querySelector('.submit-button');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Get the department from the modal title
    const department = document.querySelector('.modal-title').textContent.replace('Contact Us - ', '');
    
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        department: department,
    };
    
    // Send email using 
    // @ts-ignore
    emailjs.send('service_xgj7gys', 'template_gjfq308', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Your message has been sent successfully! We\'ll get back to you soon.';
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Show success message with animation
            setTimeout(() => {
                successMessage.classList.add('show');
            }, 100);
            
            // Close modal after a delay
            setTimeout(() => {
                closeModal();
                
                // Reset form after modal is closed
                setTimeout(() => {
                    resetContactForm();
                }, 500);
            }, 2000);
        }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            alert('Failed to send email. Please try again later or contact us directly at newlifefountainmin@gmail.com');
            
            // Reset button state
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        });
});

// Function to reset the contact form
function resetContactForm() {
    contactForm.innerHTML = `
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
    `;
}

    // Add hover effects for buttons
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Add this CSS for the ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .contact-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .contact-button.pressed {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards for scroll animations
    document.querySelectorAll('.contact-card').forEach(card => {
        observer.observe(card);
    });
});

// Add this code to your existing JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Animation for Get In Touch section
    function initGetInTouchAnimations() {
        const contactColumns = document.querySelectorAll('.contact-info-column');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        contactColumns.forEach(column => {
            observer.observe(column);
        });
    }
    
    // Hover effects for contact columns
    function initContactHoverEffects() {
        const contactColumns = document.querySelectorAll('.contact-info-column');
        
        contactColumns.forEach(column => {
            // Add floating animation on hover
            column.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            column.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
            
            // Add pulse animation to icon on hover
            const icon = column.querySelector('.contact-icon');
            if (icon) {
                column.addEventListener('mouseenter', function() {
                    icon.classList.add('pulse');
                });
                
                column.addEventListener('mouseleave', function() {
                    icon.classList.remove('pulse');
                });
            }
        });
    }
    
    // Add pulse animation CSS
    function addPulseAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            .contact-icon.pulse {
                animation: pulse 1.5s infinite;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize Get In Touch section effects
    initGetInTouchAnimations();
    initContactHoverEffects();
    addPulseAnimation();
});