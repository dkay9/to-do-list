//create a variable and store as their values the ids for the html selectors
//add click event listener to the button 
let addToDoButton = document.querySelector('#addToDo').addEventListener('click', addToDo)
let toDoContainer = document.querySelector('#toDoContainer')
let inputField = document.querySelector('#inputField')

function addToDo(){
    //create p element to display todo
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    //grab value of the input and display in the p element created 
    paragraph.innerText = inputField.value
    //append each input value to the todo containing element
    toDoContainer.appendChild(paragraph)
    inputField.value = ''
    //create event listener that syles each to do that has been done to have a line through decoration on click
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })
    //create another event listener that deletes a completed task when you double click on it
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
}