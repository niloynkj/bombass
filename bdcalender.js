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



var today = new Date();

var day = today.getDay();
var dayt = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();


if (day == 0){
var days = 'রবিবার';

}

if (day == 1){
var days = 'সোমবার';

}


if (day == 2){
var days = 'মঙ্গলবার';

}
if (day == 3){
var days = 'বুধবার';

}

if (day == 4){
var days = 'বৃহস্পতিবার';

}

if (day == 5){
var days = 'শুক্রবার';

}

if (day == 6){
var days = 'শনিবার';

}

////Monthsteart

if (month == 1) {

  var months= 'জানুয়ারি';

}

if (month == 2) {

  var months= 'ফেব্রুয়ারী';

}

if (month == 3) {

  var months= 'মার্চ';

}

if (month == 4) {

  var months= 'এপ্রিল';

}

if (month == 5) {

  var months= 'মে';

}

if (month == 6) {

  var months= 'জুন';

}

if (month == 7) {

  var months= 'জুলাই';

}

if (month == 8) {

  var months= 'আগস্ট';

}

if (month == 9) {

  var months= 'সেপ্টেম্বর';

}

if (month == 10) {

  var months= 'অক্টোবর';

}

if (month == 11) {

  var months= 'নভেম্বর';

}


if (month == 12) {

  var months= 'ডিসেম্বর';

}

////dATEsTART

if (dayt==1) {

  var dayts = '০১';

}


if (dayt==2) {

  var dayts = '০২';

}

if (dayt==3) {

  var dayts = '০৩';

}

if (dayt==4) {

  var dayts = '০৪';

}

if (dayt==5) {

  var dayts = '০৫';

}

if (dayt==6) {

  var dayts = '০৬';

}

if (dayt==7) {

  var dayts = '০৭';

}

if (dayt==8) {

  var dayts = '০৮';

}

if (dayt==9) {

  var dayts = '০৯';

}
if (dayt==10) {

  var dayts = '১০';

}

if (dayt==11) {

  var dayts = '১১';

}

if (dayt==12) {

  var dayts = '১২';

}
if (dayt==13) {

  var dayts = '১৩';

}
if (dayt==14) {

  var dayts = '১৪';

}
if (dayt==15) {

  var dayts = '১৫';

}
if (dayt==16) {

  var dayts = '১৬';

}
if (dayt==17) {

  var dayts = '১৭';

}
if (dayt==18) {

  var dayts = '১৮';

}
if (dayt==19) {

  var dayts = '১৯';

}
if (dayt==20) {

  var dayts = '২০';

}
if (dayt==21) {

  var dayts = '২১';

}
if (dayt==22) {

  var dayts = '২২';

}
if (dayt==23) {

  var dayts = '২৩';

}
if (dayt==24) {

  var dayts = '২৪';

}
if (dayt==25) {

  var dayts = '২৫';

}
if (dayt==26) {

  var dayts = '২৬';

}
if (dayt==27) {

  var dayts = '২৭';

}
if (dayt==28) {

  var dayts = '২৮';

}
if (dayt==29) {

  var dayts = '২৯';

}
if (dayt==30) {

  var dayts = '৩০';

}
if (dayt==31) {

  var dayts = '৩১';

}

/////bangladate
if (month==4 && dayt>14 || month==4 && dayt==14) {

  var bmonth = "বৈশাখ";
  var bday = dayt-13;

}

if (month==5 && dayt<14 || month==5 && dayt==14 ) {

  var bmonth = "বৈশাখ";
  var bday = dayt+17;

}

if (month==5 && dayt>15 || month==5 && dayt==15) {

  var bmonth = "জৈষ্ঠ";
  var bday = dayt-14;

}

if (month==6 && dayt<14 || month==6 && dayt==14 ) {

  var bmonth = "জৈষ্ঠ";
  var bday = dayt+17;

}

if (month==6 && dayt>15 || month==6 && dayt==15) {

  var bmonth = "আষাড়";
  var bday = dayt-14;

}
if (month==7 && dayt<14  || month==7 && dayt==14 ) {

  var bmonth = "আষাড়";
  var bday = dayt+16;

}

if (month==7 && dayt>15  || month==7 && dayt==15) {

  var bmonth = "শ্রাবন";
  var bday = dayt-15;

}

if (month==8 && dayt<15  || month==8 && dayt==15) {

  var bmonth = "শ্রাবন";
  var bday = dayt+16;

}


if (month==8 && dayt>16  || month==8 && dayt==16) {

  var bmonth = "ভাদ্র";
  var bday = dayt-15;

}

if (month==9 && dayt<15  || month==9 && dayt==15) {

  var bmonth = "ভাদ্র";
  var bday = dayt+16;

}

if (month==9 && dayt>16  || month==9 && dayt==16) {

  var bmonth = " আশ্বিন";
  var bday = dayt-15;

}

if (month==10 && dayt<16  || month==10 && dayt==16) {

  var bmonth = "আশ্বিন";
  var bday = dayt+15;

}


if (month==10 && dayt>17  || month==10 && dayt==17) {

  var bmonth = "কার্তিক";
  var bday = dayt-16;

}

if (month==11 && dayt<15  || month==11 && dayt==15) {

  var bmonth = "কার্তিক";
  var bday = dayt+15;

}

if (month==11 && dayt>16  || month==11 && dayt==16 ) {

  var bmonth = "অগ্রাহায়ন";
  var bday = dayt-15;

}

if (month==12 && dayt<15  || month==12 && dayt==15) {

  var bmonth = "অগ্রাহায়ন";
  var bday = dayt+15;

}

if (month==12 && dayt>16  || month==12 && dayt==16) {

  var bmonth = "পৌষ";
  var bday = dayt-15;

}

if (month==1 && dayt<14  || month==1 && dayt==14) {

  var bmonth = "পৌষ";
  var bday = dayt+16;

}

if (month==1 && dayt>15  || month==1 && dayt==15 ) {

  var bmonth = "মাঘ";
  var bday = dayt-14;

}

if (month==2 && dayt<13  || month==2 && dayt==13) {

  var bmonth = "মাঘ";
  var bday = dayt+17;

}

if (month==2 && dayt>14  || month==2 && dayt==14 ) {

  var bmonth = "ফাল্গুন";
  var bday = dayt-13;

}

if (month==3 && dayt<14  || month==3 && dayt==14) {

  var bmonth = "ফাল্গুন";
  var bday = dayt+16;

}

if (month==3 && dayt>15  || month==3 && dayt==15) {

  var bmonth = "চৈত্র";
  var bday = dayt-14;

}

if (month==4 && dayt<13  || month==4 && dayt==13) {

  var bmonth = "চৈত্র";
  var bday = dayt+17;

}

////dATEsTART

if (bday==1) {

  var bdays = '০১';

}


if (bday==2) {

  var bdays = '০২';

}

if (bday==3) {

  var bdays = '০৩';

}

if (bday==4) {

  var bdays = '০৪';

}

if (bday==5) {

  var bdays = '০৫';

}

if (bday==6) {

  var bdays = '০৬';

}

if (bday==7) {

  var bdays = '০৭';

}

if (bday==8) {

  var bdays = '০৮';

}

if (bday==9) {

  var bdays = '০৯';

}
if (bday==10) {

  var bdays = '১০';

}

if (bday==11) {

  var bdays = '১১';

}

if (bday==12) {

  var bdays = '১২';

}
if (bday==13) {

  var bdays = '১৩';

}
if (bday==14) {

  var bdays = '১৪';

}
if (bday==15) {

  var bdays = '১৫';

}
if (bday==16) {

  var bdays = '১৬';

}
if (bday==17) {

  var bdays = '১৭';

}
if (bday==18) {

  var bdays = '১৮';

}
if (bday==19) {

  var bdays = '১৯';

}
if (bday==20) {

  var bdays = '২০';

}
if (bday==21) {

  var bdays = '২১';

}
if (bday==22) {

  var bdays = '২২';

}
if (bday==23) {

  var bdays = '২৩';

}
if (bday==24) {

  var bdays = '২৪';

}
if (bday==25) {

  var bdays = '২৫';

}
if (bday==26) {

  var bdays = '২৬';

}
if (bday==27) {

  var bdays = '২৭';

}
if (bday==28) {

  var bdays = '২৮';

}
if (bday==29) {

  var bdays = '২৯';

}
if (bday==30) {

  var bdays = '৩০';

}
if (bday==31) {

  var bdays = '৩১';

}



 document.getElementById('DV').innerHTML = "আজ "+(days)+" "+(dayts)+"ই " +(months)+" " +"২০২০"+" খ্রিস্টাব্দ"+"</br>"+(bdays)+"ই " +(bmonth)+" " +"১৪২৭ "+"বঙ্গাব্দ";

  var ukd = "BanglaCalender/"+"Year "+(year)+"Moth "+(month)+"day "+(dayt);
  var push = Date.now();
  var link = (window.location != window.parent.location)
  ? document.referrer
  : document.location.href;
  firebase.database().ref(ukd).push().update({
      Site : link,
  });
  var ST = firebase.database().ref('Admin').child('IMG');
  ST.on('value', function(snapshot) {
  Y = (snapshot.val());
  document.getElementById('IM').src = (Y);
  });
