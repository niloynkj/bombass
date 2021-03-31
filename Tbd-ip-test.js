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


function myFunction() {
var Uip = document.getElementById('uip').value;
var res = Uip.replace(/\./g, "-");
var url = "https://effortworkers.blogspot.com/p/home.html?"+(res);
location.replace(url);
}

(function() {
  
  var myapp = angular.module('myapp', [ "firebase"]);

myapp.controller('Maincontoller', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = '';
 $scope.showData = function( ){

 $scope.itemsPerPage = 8;
 $scope.currentPage = 0;
 
 var xg = location.href;
  
var resf = xg.replace("&m=1", "");

  var res = resf.replace("https://effortworkers.blogspot.com/p/home.html?" , "");
  
  var resp = res.replace(/-/g, ".");
  document.getElementById('ps').innerHTML= (resp);
  
 var live = "Topexpertbd/page/"+(res);
var ref = firebase.database().ref().child(live);

	$scope.pages = $firebaseArray(ref);
     $scope.range = function() {
    var rangeSize = 4;
    var ps = [];
    var begin;

    begin = $scope.currentPage;
    if ( begin > $scope.pageCount()-rangeSize ) {
      begin = $scope.pageCount()-rangeSize+1;
    }

    for (var i=begin; i<begin+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.pages.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
         
}

}]);

angular.module('myapp').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();






(function() {
  
  var myapp = angular.module('myapps', [ "firebase"]);

myapp.controller('Maincontollers', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

$scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = '';     // set the default search/filter term
$scope.showData = function( ){

 $scope.itemsPerPage = 15;
 $scope.currentPage = 0;
  
  var xg = location.href;
  
var resf = xg.replace("&m=1", "");

  var res = resf.replace("https://effortworkers.blogspot.com/p/home.html?" , "");
  
 
  
 var live = "Topexpertbd/Fullpage/"+(res);
 
var ref = firebase.database().ref().child(live);

	$scope.pages = $firebaseArray(ref);
     $scope.range = function() {
    var rangeSize = 4;
    var ps = [];
    var begin;

    begin = $scope.currentPage;
    if ( begin > $scope.pageCount()-rangeSize ) {
      begin = $scope.pageCount()-rangeSize+1;
    }

    for (var i=begin; i<begin+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.pages.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
         
}

}]);

angular.module('myapps').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();

 var firstDiv = document.getElementById('myapp');
       var secondDiv = document.getElementById('myapps');

       // manually boostrapping the second app
       angular.element(document).ready(function() {
              angular.bootstrap(firstDiv, [ 'myapp' ]);
              angular.bootstrap(secondDiv, [ 'myapps' ]);
       });
	   

 
