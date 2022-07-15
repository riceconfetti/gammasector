window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByTagName("nav")[0].style.background = "rgba(0, 0, 0, .6)";
  } else {
    document.getElementsByTagName("nav")[0].style.background = "rgba(0, 0, 0, 0)";
  }
}
