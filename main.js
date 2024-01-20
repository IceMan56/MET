// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6b2m3QY5B65NsNYb5vDv_5D8wtY864Xc",
  authDomain: "metwaitlist.firebaseapp.com",
  projectId: "metwaitlist",
  storageBucket: "metwaitlist.appspot.com",
  messagingSenderId: "281939111874",
  appId: "1:281939111874:web:7c0648693ef32c2c89b05b",
  measurementId: "G-T15TTJTPF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
