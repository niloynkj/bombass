window.onload = function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api.ipify.org?format=jsonp&callback=DisplayIP";
        document.getElementsByTagName("head")[0].appendChild(script);
    };
    function DisplayIP(response) {
        document.getElementById("ip").value = (response.ip);
        document.getElementById("gfg").innerHTML  =  "Your IP" + response.ip;
    }
		
  
  var config = {
    apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"};
firebase.initializeApp(config);

 var ST = firebase.database().ref('Admin').child('img');
            ST.on('value', function(snapshot) {
            var Y = (snapshot.val());


document.getElementById('img').src = (Y); 

});   
      
function loadImage() {
  
  var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    
    clearInterval(downloadTimer);
	
	doSomething();
    
  }
  timeleft -= 1;
}, 1000);
  
}
  
  function doSomething() {  
	  

    var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate();
         var h = d.getHours();
         var mi = d.getMinutes();
         var s = d.getSeconds();
  
  var Y5 = (m)+" "+(n)+" "+(e);
  var Y6 = (h)+"h "+(mi)+"m "+(s)+"s";
 var ip = document.getElementById('ip').value; 
  var res = ip.replace(/\./g, "-");
   
 var tag = "Topexpertbd/page/"+(res)+"/"+(Y5)+(Y6);
 var url = (window.location != window.parent.location)
  ? document.referrer
  : document.location.href; 
  
 firebase.database().ref(tag).update({
      Url : url,
      time : Y6,
	  date : Y5,
	  ip : ip,
  });
    
  }
  
  

    
    
$(window).scroll(function() {
	scrollDistance = $(window).scrollTop() + $(window).height();
	footerDistance = $('#gfg').offset().top;
	
	if (scrollDistance >= footerDistance) {
	   
	var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate();
         var h = d.getHours();
         var mi = d.getMinutes();
         var s = d.getSeconds();
  
  var Y5 = (m)+" "+(n)+" "+(e);
  var Y6 = (h)+"h "+(mi)+"m "+(s)+"s";
 var ip = document.getElementById('ip').value; 
  var res = ip.replace(/\./g, "-");
    
 var tag = "Topexpertbd/Fullpage/"+(res)+"/"+(Y5)+(Y6);
 var url = (window.location != window.parent.location)
  ? document.referrer
  : document.location.href; 
  
 firebase.database().ref(tag).update({
      Url : url,
      time : Y6,
	  date : Y5,
	  ip : ip,
  });      
	   
	
	}
});
	
	
	
  
