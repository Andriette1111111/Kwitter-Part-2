function addUser(){
    username= document.getElementById("username").value;

    localStorage.setItem("username", username);
    window.location= "kwitter_room.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGUV4VwEqJCgj1LCjgccIeS4iPLs-KT5E",
    authDomain: "kwitter-f3f36.firebaseapp.com",
    databaseURL: "https://kwitter-f3f36-default-rtdb.firebaseio.com",
    projectId: "kwitter-f3f36",
    storageBucket: "kwitter-f3f36.appspot.com",
    messagingSenderId: "712862598495",
    appId: "1:712862598495:web:af0846ae7cccb347ace2ea"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);