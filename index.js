var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0 ; i<noOfDrumButtons ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
  {
    var buttonInHTML = this.innerHTML;
    makeSound(buttonInHTML);
    buttonAnimation(buttonInHTML);
  });
}

document.addEventListener("keydown",function (){
      makeSound(event.key);
      buttonAnimation(event.key);
});


function makeSound(key)
{
  switch (key)
  {
    case "w":
      var audi = new Audio('sounds/tom-1.mp3');
      audi.play();
      break;
    case "a":
      var audi = new Audio('sounds/tom-2.mp3');
      audi.play();
      break;
    case "s":
      var audi = new Audio('sounds/tom-3.mp3');
      audi.play();
      break;
    case "d":
      var audi = new Audio('sounds/tom-4.mp3');
      audi.play();
      break;
    case "j":
      var audi = new Audio('sounds/kick-bass.mp3');
      audi.play();
      break;
    case "k":
      var audi = new Audio('sounds/crash.mp3');
      audi.play();
      break;
    case "l":
      var audi = new Audio('sounds/snare.mp3');
      audi.play();
      break;
    default:
  }
}

function buttonAnimation(currentKey)
{
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
  activeKey.classList.remove("pressed");},50);
}
