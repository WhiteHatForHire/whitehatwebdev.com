
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

 $('.overlay-menu > ul').click(function() {
  $('#toggle').toggleClass('active');
   
   $('#overlay').toggleClass('open');
  console.log('working');
 });

function down_arrow() {
  document.getElementById('landing').scrollIntoView({block: 'start', behavior: 'smooth'});
}