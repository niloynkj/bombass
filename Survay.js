function btn(){
	
var str = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
			
   var stt = str.replace("https://topexpertbd.blogspot.com/2021/02/le-halua-le-full-movie.html?", "");

	


var t1 = stt.replace("&m=1", "");
localStorage.setItem('key1', t1);


var data = localStorage.getItem('key1');
document.getElementById("link").innerText= (data);


     location.replace("https://topexpertbd.blogspot.com/2021/01/master-movie-full-movie-download-hd.html")
            
};

