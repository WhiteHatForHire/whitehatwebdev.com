$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

 $('.overlay-menu > ul').click(function() {
  $('#toggle').toggleClass('active');
   
   $('#overlay').toggleClass('open');
  // console.log('working');
 });

function down_arrow() {
  document.getElementById('landing').scrollIntoView({block: 'start', behavior: 'smooth'});
}

function down_arrow2() {
  document.getElementById('about').scrollIntoView({block: 'start', behavior: 'smooth'});
}

function down_arrow3() {
  document.getElementById('showcase').scrollIntoView({block: 'start', behavior: 'smooth'});
}
function down_arrow4() {
  document.getElementById('home').scrollIntoView({block: 'start', behavior: 'smooth'});
}

function down_arrow5() {
  document.getElementById('contact').scrollIntoView({block: 'start', behavior: 'smooth'});
}

// $('.headSection').hover(
//   function(){
//     $(this).find('img').toggleClass('hover-shadow');
//   }
// );