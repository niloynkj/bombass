var config = {
  apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"
};

firebase.initializeApp(config);

var tt = "User/123-108-246-124";
var ST = firebase.database().ref(tt).child("Point");
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());
            document.getElementById("point").innerHTML = (Y);});



function clear(){
	
	alert("ok");
	
	
}
