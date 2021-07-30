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


var STP = firebase.database().ref("Admin").child("img");
            STP.on('value', function(snapshot) {
            var Yw = (snapshot.val());
            alert(Yw);});


var adminc = localStorage.getItem('key1');

if (adminc == "Admin"){
document.getElementById("cleard").style.display = "block"; 
}

var xg = location.href;
  
var resf = xg.replace("&m=1", "");

var Psf = resf.replace("https://effortworkers.blogspot.com/p/home.html?" , "");

var tt = "User/"+(Psf);
var ST = firebase.database().ref(tt).child("Point");
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());
            document.getElementById("point").innerHTML = (Y);});



function clearsg(){

var xg = location.href;
  
var resf = xg.replace("&m=1", "");

var Psf = resf.replace("https://effortworkers.blogspot.com/p/home.html?" , "");


        var gg = "Topexpertbd/page/"+(Psf);
	var ggg = "Topexpertbd/Fullpage/"+(Psf);
	firebase.database().ref(gg).remove();
	firebase.database().ref(ggg).remove();
var user = "User/"+(Psf);
	
	var point = document.getElementById("point").innerHTML;
	var pointon = +point+1;
	
	firebase.database().ref(user).update({
              Point : pointon,
           
            });
	

	
	alert("User Clear Success✅ ");
	
	
}
