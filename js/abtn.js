var btnContainer = document.getElementsByClassName("abtn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("actived");
current[0].className = current[0].className.replace(" actived", "");
this.className += " actived";
  });
}