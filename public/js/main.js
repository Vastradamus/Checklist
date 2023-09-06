
// const todoItem = document.querySelectorAll('.todoCheckbox')
// const todoComplete = document.querySelectorAll('span.completed')
// const todoCheckbox = document.querySelectorAll('span.not')


function handleCheckboxClick(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        markComplete(event);
    } else {
        markIncomplete(event);
    }
}


class ArrWithEvents {
    constructor(selector, handler) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((el) => {
            el.addEventListener('click', handler);
        });
    }
}

// Initialize event listeners
const checkboxes = new ArrWithEvents('.todoCheckbox', handleCheckboxClick);
   
    // const textComplited = new ArrWithEvents ('span.completed',markComplete)
    // const checBoxComplited = new ArrWithEvents ('.todoCheckbox',markComplete)
    // const textIncomplete = new ArrWithEvents ('span.not',markIncomplete)
    // const checkBoxIncomplete = new ArrWithEvents('.todoCheckbox',markIncomplete)
// Array.from(todoCheckbox).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })


// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })


// markComplite



async function markComplete(){
    const todoId = event.target.closest('li').dataset.id;
    try{
        const response = await fetch('/list/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = event.target.closest('li').dataset.id;
    try{
        const response = await fetch('/list/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Constructor for del

class Del {
    constructor(selector, route) {
        const btns = document.querySelectorAll(selector);
        this.route = route
        Array.from(btns).forEach((el)=>{
            el.addEventListener('click', (event) => this.deleteTodo(event))
        })
        
    }

    async deleteTodo(){
        const todoId = event.target.closest('li').dataset.id;
        try{ 
            const response = await fetch(`${this.route}`, {
                method: 'delete',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'todoIdFromJSFile': todoId
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        }catch(err){
            console.log(err)
        }
    }
    
}

const delList = new Del('.del','/list/deleteTodo')
const  deltest = new Del('.obrisi','/checklists/deleteChecklist')
const  delFolderdsds = new Del('.delFolder','/checklists/deleteFolder')


// reset checklists 



const rsChecklist = document.querySelector('#list-reset')

rsChecklist.addEventListener('click', function() {
    resetChecklist();
});

async function resetChecklist(){
    try{ 
       const checklistId = window.location.pathname.split('/')[2];
        const response = await fetch(`/list/${checklistId}/resetChecklist`, {
            method: 'PUT'
        });
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch(err){
        console.log(err);
    }
}


// copy checklist



const copyChecklistButton = document.getElementById('copy-checklist');
const copyChecklistForm = document.getElementById('copy-checklist-form');
const overlay = document.getElementById('overlay');

copyChecklistButton.addEventListener('click', () => {
  copyChecklistForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  copyChecklistForm.classList.add('hidden');
  overlay.classList.add('hidden');
});



// li hidden functionality

const todoLi = document.querySelectorAll('todoItem')

Array.from(todoLi).forEach((el)=>{
    el.addEventListener('mouseover', () => {

    })
})



