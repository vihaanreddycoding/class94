
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCx35JDeTEVMPP3uLEz0IX20CGHIk1RyUs",
    authDomain: "kwitter-56142.firebaseapp.com",
    databaseURL: "https://kwitter-56142-default-rtdb.firebaseio.com",
    projectId: "kwitter-56142",
    storageBucket: "kwitter-56142.appspot.com",
    messagingSenderId: "289720123204",
    appId: "1:289720123204:web:d34bbf25cfcf088bcd6111"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}