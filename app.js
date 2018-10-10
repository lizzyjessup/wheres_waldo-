
document.addEventListener('DOMContentLoaded', function(){

console.log('Dom content loaded'); 


document.querySelector('#lilWaldo').onclick = yes;

console.log('Dom content loaded');

function yes() {
  console.log('function');
  var pic = "https://st3.depositphotos.com/4038693/16378/v/1600/depositphotos_163784444-stock-illustration-you-win-message-in-pop.jpg";
  document.getElementById('bigpic').innerHTML = "<img src="+ pic + ">";
  document.querySelector('.madrid').style.zIndex = "0";
  document.querySelector('#bigpic').style.zIndex = "1";

}

});
