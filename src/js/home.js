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