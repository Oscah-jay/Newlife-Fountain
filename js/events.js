function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

function toggleEventDetails(eventId) {
    const eventDetails = document.getElementById(`event-details-${eventId}`);
    if (eventDetails.style.display === "none" || eventDetails.style.display === "") {
        eventDetails.style.display = "block";
    } else {
        eventDetails.style.display = "none";
    }
}
