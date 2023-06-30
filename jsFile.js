
// set number of task
var numberOfTask = 0;
document.getElementById('number-of-task-value').innerText = "Number Of Task:" + numberOfTask;
//Adding onclick listner to add button
let addButton = document.getElementById('add-button');


// Getting all the complete Buttons by class name
var completeButtons = document.getElementsByClassName('task-complete-button');


// Getting all the delete button by class name
var close = document.getElementsByClassName('delete-button');

//added on click listner to add button 
addButton.addEventListener('click', function () {

    var taskTitle = document.getElementById('adding-task-input').value;

    //Checking , input field empty or not
    if (taskTitle === '') {
        alert("Empty fiels is not possible");
    }
    else {
        numberOfTask++;
        var li = document.createElement('li');

        //delete button 
        var button = document.createElement('button');
        var buttonName = document.createTextNode('Delete');
        button.appendChild(buttonName);
        button.className = 'delete-button';

        //paragraph content
        var p = document.createElement('p');
        var taskTitleTextNode = document.createTextNode(taskTitle);
        p.appendChild(taskTitleTextNode);
        p.className = 'task-item';

        //Complete button
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'task-complete-button';

        li.appendChild(checkBox);
        li.appendChild(p);
        li.appendChild(button);

        document.getElementById('task-ul-list').appendChild(li);
        document.getElementById('adding-task-input').value = "";


        //set onclick listener to all delete button

        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                numberOfTask--;
                var div = this.parentElement;
                div.style.display = 'none';
                document.getElementById('number-of-task-value').innerText = "Numer Of Task:" + numberOfTask;
            }
        }

        //set onclick listner to all complete button

        for (i = 0; i < completeButtons.length; i++) {
            completeButtons[i].onclick = function () {
                if (this.checked == true) {
                    this.parentElement.style.textDecoration = 'line-through';

                }
                else {
                    this.parentElement.style.textDecoration = '';
                    // alert('false');
                }
            }
        }

        // set number of task
        document.getElementById('number-of-task-value').innerText = "Numer Of Task:" + numberOfTask;

    }

})

