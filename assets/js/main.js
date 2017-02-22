console.log("Hello World from main.js!");
<<<<<<< HEAD
// higher order functions

//Functions that take another function and its parameters or return another function

// object.push((function sum(a,b){ return a+b}))
// ToDo app and submit btn
//chkbx to mark as done
// button to remove.
// counter for item that exist. 
// done counter
// the ability to edit item when made
//ability to save list
// hide show completed
// clear all completed
// save list. 
// to do MVC
function countForever() {
	var counter = document.querySelectorAll('.list-item').length;
	console.log(counter);
	var pageCount = document.querySelector('.counter');
	pageCount.innerHTML = "You currently have " + counter + " tasks to complete";
}
setInterval(countForever, 100);


var itemText = document.querySelector('input[name = todo-input]');
var todoList = document.querySelector('.todo-list');
var submitButton = document.querySelector('.submit');
console.dir(submitButton);

function listItemCreator (itemText) {
	var li = document.createElement('li');
	var checkbox = document.createElement('input')
	var closeButton = document.createElement('button');
	var task = document.createElement('p');
	var edit = document.createElement('button');
	var editInput = document.createElement('input');
	editInput.setAttribute('type', '""');
	editInput.classList.add('editInput')
	edit.setAttribute('type','button');
	edit.classList.add('edit');
	edit.innerHTML = "Edit Task";
	li.classList.add('list-item')
	li.setAttribute('data', 'shown');
	checkbox.setAttribute('type', 'checkbox');
	closeButton.setAttribute('type', 'button');
	closeButton.innerHTML = "X";
	task.innerHTML = itemText;
	todoList.appendChild(li);
	li.appendChild(checkbox);
	li.appendChild(task);
	li.appendChild(closeButton);
	li.appendChild(edit);
	console.dir(li);

	
	edit.addEventListener('click', function() {
		if(edit.innerHTML == "Edit Task"){
			edit.innerHTML = 'Submit Edit'
			document.querySelector('.editInput') ? editInput.style.display = 'inline-block' : li.appendChild(editInput);
		} else {		
			var p = li.childNodes[1];
			p.innerHTML = editInput.value;
			editInput.style.display = 'none';
			edit.innerHTML = "Edit Task";
		}
	})

	return [checkbox, closeButton];
}


function createToDo() {
	//get info from form.

	return itemText.value;
}

var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	 var button = (function(){
		var a = []
		a = listItemCreator(createToDo());


		window.addEventListener('click', function() {
				a[0].checked ? a[0].parentNode.classList.add('complete') : a[0].parentNode.classList.remove('complete');
		})

		itemText.value = "";
		itemText.innerHtml = "";

		return a[1];
	})();

	button.addEventListener('click', function() {
		button.parentNode.classList.contains('complete') ? button.parentNode.parentNode.removeChild(button.parentNode) : alert('You need to complete the task');
	})
})	
var completed = 0;
document.querySelector('.clear').addEventListener('click', function() {

	completed += (function(previous) {
		var clear = document.querySelectorAll('.complete');
		var completedTasks = clear.length;
		for (var i = clear.length - 1; i >= 0; i--) {
			clear[i].parentNode.removeChild(clear[i]);
		} return completedTasks
	})();
	document.querySelector('.completeCount').addEventListener('click', function() {
		document.querySelector('.completedTasks').innerHTML = "Congratulations you have completed " + completed + " tasks";
	})

})
document.querySelector('.selectAll').addEventListener('click', function select() {
	var all = document.querySelectorAll('.list-item');
	console.log(all);
	for (var i = all.length - 1; i >= 0; i--) {
		if(!all[i].classList.contains('complete')) {
			all[i].classList.add('complete');
			!all[i].childNodes[0].checked ? all[i].childNodes[0].checked=true : console.log('previously checked');
		} else if (all[i].childNodes[0].checked != all[0].childNodes[0].checked) {
			all[i].classList.add('complete');
			!all[i].childNodes[0].checked ? all[i].childNodes[0].checked=true : console.log('previously checked');
		} else {
			all[i].classList.remove('complete');
			!all[i].childNodes[0].checked ? all[i].childNodes[0].checked=true : all[i].childNodes[0].checked=false;
		}

	}
})
document.querySelector('.hide').addEventListener('click', function() {
		var all = document.querySelectorAll('.complete');
		console.log('fired');
		for (var i = all.length - 1; i >= 0; i--) {
			console.log(all[i].attributes.data.value);
			if(all[i].attributes.data.value == "shown") {
				all[i].style.display = 'none'
				all[i].attributes.data.value = "none";
			} else if(all[i].attributes.data.value != all[0].attributes.data.value) {
				all[i].style.display = 'none'
				all[i].attributes.data.value = "none";
			}else {
				all[i].style.display = 'inline-block';
				all[i].attributes.data.value = "shown";
			}
		}
})



=======

// var $kayak = document.querySelector(".kayak-body");
// var rightPressed = false;
// var leftPressed = true;
// function keyDownHandler(e) {
// 	if(e.keyCode == 39) {
// 		rightPressed = true;
// 		moveRight();
// 	} else if(e.keyCode == 37) {
// 		leftPressed = true;
// 		moveLeft();
// 	}
// }
// var moveRight = function() {
// 	clearInterval(id);
// 	var id = setInterval(move, 5);
// 	pos = 0;
// 	function move() {
// 		if(pos >= 100) {
// 			clearInterval(id);
// 			pos=0;
// 		}else if(posLeft>= window.innerWidth) {
// 			posLeft = 0;
// 			$kayak.style.left = posLeft + "px";
// 			pos++;
// 		} else {
// 			posLeft = posLeft + .5;
// 			$kayak.style.left = posLeft + "px";
// 			console.log("moving");
// 			pos++;
// 	}
// }
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup" , keyUpHandler, false);
>>>>>>> origin/master
