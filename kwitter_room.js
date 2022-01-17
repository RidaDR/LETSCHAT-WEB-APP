
var  firebaseConfig = {
      apiKey: "AIzaSyCmBICyiJafCi8WYW7xznBj1zOeYrCmb5I",
      authDomain: "social-website-5fa57.firebaseapp.com",
      databaseURL: "https://social-website-5fa57-default-rtdb.firebaseio.com",
      projectId: "social-website-5fa57",
      storageBucket: "social-website-5fa57.appspot.com",
      messagingSenderId: "416518626532",
      appId: "1:416518626532:web:e21fd8b182edd65eae60f1",
      measurementId: "G-RYX00WGPSF"
    };
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)  
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
