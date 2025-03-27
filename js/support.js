document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');
    
    // Create mobile toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.classList.add('mobile-toggle');
    mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    body.appendChild(mobileToggle);
    
    mobileToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = mobileToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
    
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // Close other accordion items (optional)
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Close sidebar on mobile after clicking a link
            if (window.innerWidth < 993) {
                sidebar.classList.remove('active');
            }
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Parallax effect
    window.addEventListener('scroll', function() {
        const parallaxBgs = document.querySelectorAll('.parallax-bg');
        
        parallaxBgs.forEach(bg => {
            const scrollPosition = window.pageYOffset;
            const parentSection = bg.parentElement;
            const sectionTop = parentSection.offsetTop;
            const sectionHeight = parentSection.offsetHeight;
            
            // Only apply parallax if section is in view
            if (scrollPosition > sectionTop - window.innerHeight && 
                scrollPosition < sectionTop + sectionHeight) {
                const speed = 0.5; // Adjust for faster/slower parallax
                const yPos = (scrollPosition - sectionTop) * speed;
                bg.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Initial check for elements in viewport on page load
    checkFadeElements();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkFadeElements);
    
    function checkFadeElements() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Adjust this value to change when elements become visible
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }
    
    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop - 200 && 
                window.pageYOffset < sectionTop + sectionHeight - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});