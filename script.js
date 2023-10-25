function showProjectDetails(title, description) {
    // Get the modal and its components
    const modal = document.getElementById("projectModal");
    const projectTitle = document.getElementById("projectTitle");
    const projectDescription = document.getElementById("projectDescription");

    // Set the project details
    projectTitle.innerText = title;
    projectDescription.innerText = description;

    // Display the modal
    modal.style.display = "block";
}

function closeProjectDetails() {
    // Get the modal and hide it
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
