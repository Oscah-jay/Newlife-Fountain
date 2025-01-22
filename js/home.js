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