function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

const $list=document.querySelectorAll('li');

function activeLink() {
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
    this.classList.add('active');
}
$list.forEach(($li) => {
    $li.addEventListener(
        'click',
         activeLink,
         );
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.card').forEach(c => {
            c.style.animationPlayState = 'paused';
        });
    });

    card.addEventListener('mouseleave', () => {
        document.querySelectorAll('.card').forEach(c => {
            c.style.animationPlayState = 'running';
        });
    });
});


function goToLeadersPage() {
    window.location.href = 'leaders.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Add hover effect
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '2';
        });
    });
    
    // Handle mobile view
    function handleResponsiveLayout() {
        const timeline = document.querySelector('.timeline');
        const isMobile = window.innerWidth <= 480;
        
        if (isMobile) {
            // Calculate height for vertical timeline
            let totalHeight = 0;
            timelineItems.forEach(item => {
                totalHeight += item.offsetHeight + 40; // item height + margin
            });
            timeline.style.height = (totalHeight + 50) + 'px';
        } else {
            timeline.style.height = window.innerWidth <= 768 ? '350px' : '400px';
        }
    }
    
    // Run on load and resize
    window.addEventListener('resize', handleResponsiveLayout);
    handleResponsiveLayout();
    
    // For touch devices
    if ('ontouchstart' in window) {
        document.querySelector('.timeline-container').style.overflowX = 'scroll';
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the hero content element
    const heroContent = document.querySelector('.hero-content');
    const video = document.getElementById('background-video');
    
    // Ensure video plays
    video.play().catch(function(error) {
        console.log("Video play failed:", error);
        
        // If autoplay fails (common on mobile), add a play button
        if (error.name === "NotAllowedError") {
            const playButton = document.createElement('button');
            playButton.textContent = "Click to Play";
            playButton.className = "video-play-button";
            document.querySelector('.hero-section').appendChild(playButton);
            
            playButton.addEventListener('click', function() {
                video.play();
                playButton.style.display = 'none';
            });
        }
    });
    
    // Simple fade-in animation for content
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1.5s ease-in-out';
        heroContent.style.opacity = '1';
    }, 300);
});


document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation for content
    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image');
    
    // Set initial opacity
    aboutContent.style.opacity = 0;
    aboutImage.style.opacity = 0;
    
    // Add transition property
    aboutContent.style.transition = 'opacity 1s ease, transform 1s ease';
    aboutImage.style.transition = 'opacity 1s ease, transform 1s ease';
    
    // Set initial transform for slide-in effect
    aboutContent.style.transform = 'translateX(-20px)';
    aboutImage.style.transform = 'translateX(20px)';
    
    // Trigger animation after a short delay
    setTimeout(() => {
        aboutContent.style.opacity = 1;
        aboutContent.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            aboutImage.style.opacity = 1;
            aboutImage.style.transform = 'translateX(0)';
        }, 300);
    }, 300);
    
    // Optional: Add hover effect to the Read More button
    const readMoreBtn = document.querySelector('.read-more-btn');
    
    readMoreBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    readMoreBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation for content
    const leadershipContent = document.querySelector('.leadership-content');
    const leadershipImage = document.querySelector('.leadership-image');
    
    // Set initial opacity
    leadershipContent.style.opacity = 0;
    leadershipImage.style.opacity = 0;
    
    // Add transition property
    leadershipContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    leadershipImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Set initial transform for slide-in effect
    leadershipContent.style.transform = 'translateY(20px)';
    leadershipImage.style.transform = 'translateY(20px)';
    
    // Trigger animation after a short delay
    setTimeout(() => {
        leadershipContent.style.opacity = 1;
        leadershipContent.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            leadershipImage.style.opacity = 1;
            leadershipImage.style.transform = 'translateY(0)';
        }, 200);
    }, 300);
    
    // Navigation arrows functionality
    // This is a placeholder for actual slider functionality
    // You would need to add more leaders to make this work
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    prevButton.addEventListener('click', function() {
        console.log('Previous leader');
        // Add your slider functionality here
        alert('Navigate to previous leader');
    });
    
    nextButton.addEventListener('click', function() {
        console.log('Next leader');
        // Add your slider functionality here
        alert('Navigate to next leader');
    });
    
    // Button hover effect
    const leadershipBtn = document.querySelector('.leadership-btn');
    
    leadershipBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
    
    leadershipBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

//footer

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect to footer links
    const footerLinks = document.querySelectorAll('.footer-column ul li a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '5px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '0';
        });
    });
    
    // Mobile menu toggle for responsive design
    const footerHeadings = document.querySelectorAll('.footer-column h3');
    
    if (window.innerWidth < 768) {
        footerHeadings.forEach(heading => {
            heading.addEventListener('click', function() {
                const columnContent = this.nextElementSibling;
                
                if (columnContent.style.display === 'none' || columnContent.style.display === '') {
                    columnContent.style.display = 'block';
                    this.style.color = '#f7941d';
                } else {
                    columnContent.style.display = 'none';
                    this.style.color = '#333';
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Parallax effect for sermon section background
    function handleSermonsParallax() {
      const sermonsSection = document.querySelector(".sermons-preview-section")
      if (!sermonsSection) return
  
      const parallaxBg = sermonsSection.querySelector(".parallax-bg")
      if (!parallaxBg) return
  
      const scrollPosition = window.pageYOffset
      const sectionTop = sermonsSection.offsetTop
      const sectionHeight = sermonsSection.offsetHeight
  
      // Only apply parallax if section is in view
      if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + sectionHeight) {
        const speed = 0.4 // Adjust for faster/slower parallax
        const yPos = (scrollPosition - sectionTop) * speed
        parallaxBg.style.transform = `translateY(${yPos}px)`
      }
    }
  
    // Call on scroll and on initial load
    window.addEventListener("scroll", handleSermonsParallax)
    handleSermonsParallax()
  
    // Animate sermon cards on hover
    const sermonCards = document.querySelectorAll(".sermon-card")
  
    sermonCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const image = this.querySelector(".sermon-image")
        if (image) {
          image.style.transform = "scale(1.1)"
        }
      })
  
      card.addEventListener("mouseleave", function () {
        const image = this.querySelector(".sermon-image")
        if (image) {
          image.style.transform = "scale(1)"
        }
      })
    })
  })
  
  