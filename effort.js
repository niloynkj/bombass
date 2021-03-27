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
Ps = document.getElementById("ps").innerHTML;
var Psf = Uip.replace(/\./g, "-");
var tt = "User/"+(Psf);
var ST = firebase.database().ref(tt).child("Point");
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());
            document.getElementById("point").innerHTML = (Y);});



function clearsg(){

var Ps = document.getElementById("ps").innerHTML;

var Psf = Uip.replace(/\./g, "-");

        var gg = "Topexpertbd/page/"+(Psf);
	var ggg = "Topexpertbd/fullpage/"+(Psf);
	firebase.database().ref(gg).remove();
	firebase.database().ref(ggg).remove();
var user = "User/"+(Psf);
	
	var point = document.getElementById("point").innerHTML;
	var pointon = +point+1;
	
	firebase.database().ref(user).update({
              Point : pointon,
           
            });
	

	
	alert("ok");
	
	
}
