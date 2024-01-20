document.getElementById('waitingListForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simple validation
    if (!name || !email) {
        alert("Please enter both name and email.");
        return;
    }

    // TODO: Integrate with an email service API
    // Display a confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
});
