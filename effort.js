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
var tt = "User/"+(Ps);
var ST = firebase.database().ref(tt).child("Point");
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());
            document.getElementById("point").innerHTML = (Y);});



function clearsg(){

Ps = document.getElementById("ps").innerHTML;

        var gg = "Topexpertbd/page/"+(Ps);
	var ggg = "Topexpertbd/fullpage/"+(Ps);
	firebase.database().ref(gg).remove();
	firebase.database().ref(ggg).remove();
var user = "User/"+(Ps);
	
	var point = document.getElementById("point").innerHTML;
	var pointon = +point+1;
	
	firebase.database().ref(user).update({
              Point : pointon,
           
            });
	

	
	alert("ok");
	
	
}
