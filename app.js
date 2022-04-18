document.getElementById('formTask').addEventListener('submit', saveTask)

function saveTask(e) {
 let title = document.getElementById('title').value
 let description = document.getElementById('description').value
 console.log(description)

 let task = {
  title,
  description,
 }

 if (localStorage.getItem('tasks') === null) {
  let tasks = []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 }

 getTasks()
 document.getElementById('formTask').reset()
 e.preventDefault()
}

function deleteTask(title) {
 console.log(title)
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].title == title) {
   tasks.splice(i, 1)
  }
 }

 localStorage.setItem('tasks', JSON.stringify(tasks))
 getTasks()
}

function getTasks() {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 let tasksView = document.getElementById('tasks')
 tasksView.innerHTML = ''
 for (let i = 0; i < tasks.length; i++) {
  let title = tasks[i].title
  let description = tasks[i].description

  tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ms-3">Eliminar</a>
          <a href="#" onclick="completeTask('${title}')" class="btn btn-warning ms-3">Completado</a>
          </p>
        </div>
      </div>`
 }
}

function completeTask(s) {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 let tasksView = document.getElementById('tasks')
 tasksView.innerHTML = ''
 for (let i = 0; i < tasks.length; i++) {
  let title = tasks[i].title
  let description = tasks[i].description

  tasksView.innerHTML += `<div class="card mb-3">
         <div class="card-body" style="background: #4DE590; color:black; " )>
           <p>${title} - ${description}
           <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ms-3">Eliminar</a>
           </p>
         </div>
       </div>`
 }
}

getTasks()

// scroll reveal
ScrollReveal().reveal('.card-body', { delay: 500 })
ScrollReveal().reveal('.card-body', { reset: true })
ScrollReveal().reveal('.container', { delay: 500 })
ScrollReveal().reveal('.container', { reset: true })
