
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("navbar").style.backgroundColor = "#161e29";
    document.getElementById("navbar").style.marginTop = "-5px";
    document.getElementById("logo").style.fontSize = "20px";     
    document.getElementById("navbar").style.boxShadow = "0 0 5px 5px #fff";      
    
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("links").style.marginTop = "100px"; 
  }
}

$(document).ready(function(){
  var typed = new Typed(".typing", {
    strings: [ "Dream | Innovate | Inspire"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [ "Read Our Blogs....","About our workshops....", "Our Trainings....","Meet Our Campus Leaders...."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});