// Assuming Firebase has been set up and initialized

document.getElementById('waitingListForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simple validation
    if (!name || !email) {
        alert("Please enter both name and email.");
        return;
    }

    // Add record to Firebase
    firebase.firestore().collection('waitingList').add({
        name: name,
        email: email
    }).then(() => {
        // Display a confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
    }).catch(error => {
        console.error("Error adding document: ", error);
    });
});
