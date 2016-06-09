// // GO!
var KEY_CODES = {
  spaceBar: 32,
  enterKey: 13,
  upArrow: 38,
  rightArrow: 39,
  downArrow: 40,
  leftArrow: 37
}


// Task 1
var navButton = document.querySelector(".answer-box button")
var navMenu = document.querySelector(".nav-menu")
var navMenuShowing = true

var toggleNavMenu = function() {
  if (navMenuShowing) {
    navMenu.style.opacity = 0
    navMenuShowing = false
  }
  else {
    navMenu.style.opacity = 1
    navMenuShowing = true
  }
}

navButton.addEventListener('click',toggleNavMenu)


// Task 2
var guestList = document.querySelector(".guest-list")
var inputNode = document.querySelector('input[type="text"]')
var handleItemAdd = function(eventObj) {
	if (eventObj.keyCode === KEY_CODES.enterKey) {
		var usrText = inputNode.value
		var liNode = document.createElement('li')
		liNode.textContent = usrText
		guestList.appendChild(liNode)
      
      inputNode.value = ''
  	}
}
inputNode.addEventListener('keydown',handleItemAdd)


// Task 3


var guestList2 = document.querySelector(".answer-box3 .guest-list")
var inputNode2 = document.querySelector('.answer-box3 input[type="text"]')
var handleItemAdd2 = function(eventObj) {
	if (eventObj.keyCode === KEY_CODES.enterKey) {
		var usrText2 = inputNode2.value
		var liNode2 = document.createElement('li')
		var buttonNode = document.createElement('button')
		liNode2.textContent = usrText2
		guestList2.innerHTML += '<li id="task3" display="inline-block">' + usrText2 + '<button id="Rmv">X</button>' + '</li>'
      
      inputNode2.value = ''
  	}
}
inputNode2.addEventListener('keydown',handleItemAdd2)





var rmvNode = document.querySelectorAll('button#Rmv')

var handleItemRemove = function(){
var liNode2 = document.querySelector('li#task3')
guestList2.removeChild(liNode2)
}

rmvNode.addEventListener('click',handleItemRemove)








