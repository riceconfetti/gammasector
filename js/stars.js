var stars = 200;
for (let i=0; i< stars; ++i) {
  var dDepth = Math.random()*3;
  if (i<70) {
    dDepth = 0.1;
  }
  var size = Math.random()*7;
  var x = Math.floor(Math.random() * 100) + Math.random();
  var y = Math.floor(Math.random() * 100) + Math.random();
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", size);
  svg.setAttribute("width", size);
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx",size/2);
  circle.setAttribute("cy",size/2);
  circle.setAttribute("r",size/2 -(.1*size));
  svg.appendChild(circle);
  $(svg).attr('data-depth', dDepth).addClass('star');
  $(svg).addClass('star'+ i);
  $( "<style> .star" + i +  " { top:" + y+ "vh!important; left:" +x +"vw !important}</style>" ).appendTo( "head" );
  $('#map').append(svg);
}

var scene = document.getElementById('map');
var parallaxInstance = new Parallax(scene, {
  pointerEvents: true
});

$(".sys_img").click(function() {
  var system = $(this).attr('data-system');
  $("." + system).addClass('active');
  //parallaxInstance.disable();
});

$('.close, .system').click(function() {
  $(".system").removeClass('active');
  //parallaxInstance.enable();
})
