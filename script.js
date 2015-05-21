var image = document.getElementById('source');

var counter = null;
var dir = 'right';

var walkingMan = setInterval(function() {

  if (dir === 'right') {

    counter = counter + 20;
    image.style.marginLeft = counter + "px";
    image.style.transform = "scaleX(1)";

    if (counter >= window.innerWidth - 300) {
      dir = 'left';
    }
  }

  if (dir === 'left') {

    counter = counter - 20;
    image.style.marginLeft = counter + "px";
    image.style.transform = "scaleX(-1)";

    if (counter === 0) {
      dir = 'right';
    }
  }

}, 200);
