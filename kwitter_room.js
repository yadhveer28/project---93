var firebaseConfig = {
      apiKey: "AIzaSyA8W4CG7pzksN6yszuzMM5nrryNJ-Xu3tQ",
      authDomain: "kwitter-8e429.firebaseapp.com",
      databaseURL: "https://kwitter-8e429-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e429",
      storageBucket: "kwitter-8e429.appspot.com",
      messagingSenderId: "385910273633",
      appId: "1:385910273633:web:262919c34117c043ee1c20"
    };
    
    
    firebase.initializeApp(firebaseConfig);
  


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room_name"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";  
      document.getElementById("output").innerHTML += row ;

      });});}
getData();


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}