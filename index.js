let numOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
// } audio.play();
// agr kai sari buutons ko ko click karna hai aur result same chahiye too pahle ek loop bana lo jisme sare button a jae
// //  jin buttono ko click karna hai unka ek special class hona chahiye
// function(num1,num2,operator){
// return operator(num1,num2)

// };sounds/tom-1.mp3
// let audio=new Audio('sounds/tom-1.mp3')
//     audio.play();

// let houseKeeper1={      //long way
// yearsOfExp:12,
// name:'angela',
// cleaningReportoire:['bathroom','lobby','bedroom']
// }
//short way

// let HouseKeeper= function(yearsOfExp,name,cleaningReportoire){
// this.yearsexp=yearsOfExp,
// this.nam=name,
// this.cleaningReportoir=cleaningReportoire
// }
// let housekepper1=new HouseKeeper (12,'tina',['lobby','bedroom']);
// let housekepper2=new HouseKeeper (10,'mina',['lobby','cotlery']);
// console.log(housekepper1);
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(key);
  }
}
