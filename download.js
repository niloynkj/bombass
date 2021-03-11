var config = {
    apiKey: "AIzaSyAmjt4yAPt2PlScByaZXGFBNQZ2nYoL3HQ",
  authDomain: "weblogin-13a48.firebaseapp.com",
  databaseURL: "https://weblogin-13a48.firebaseio.com",
  projectId: "weblogin-13a48",
  storageBucket: "weblogin-13a48.appspot.com",
  messagingSenderId: "653973990255",
  appId: "1:653973990255:web:494c0bc958f2ba3c52569a",
  measurementId: "G-QLT3J601KJ"};
firebase.initializeApp(config);

var link = localStorage.getItem('key1');

var ST = firebase.database().ref("Post").child(link);
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());
            document.getElementById("link").innerHTML = (Y);});


var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
	document.getElementById("btn").disabled = false;
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);





function btn(){
	var links = document.getElementById("link").innerText;
	window.open(links);
	
};

