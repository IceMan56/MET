
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";

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

    // Get a reference to the database service
    const database = getDatabase(app);

    document.getElementById("submit").addEventListener("click", function(e) {
        set(ref(database, 'users/' + document.getElementById("name").value), {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            organisation_name: document.getElementById("organisation name").value
        });
    }
