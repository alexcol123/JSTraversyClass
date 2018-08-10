// Define UI Vars
const form = document.querySelector('#task-form'); // This is the form
const taskList = document.querySelector('.collection'); // this is the UL
const clearBtn = document.querySelector('.clear-tasks'); // this is the clear tasks button
const filter = document.querySelector('#filter'); // this is the Input to Filter task
const taskInput = document.querySelector('#task'); // This is the input for New Task





// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove  task event
  taskList.addEventListener('click', removeTask);

  // Clear Task Events 
  clearBtn.addEventListener('click', clearTasks);

  // filter tasks
  filter.addEventListener('keyup', filterTasks);
}



// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please Add A task !')
  }
  const textcontent =`
  ${taskInput.value} 
    <a class="delete-item secondary-content">
      <i class="fa fa-trash fa-lg"></i>
    </a>
  </li>`;

  const li = document.createElement('li');

  li.className = 'collection-item';

  li.innerHTML = textcontent;
  


  // // Create li element 
  // const li = document.createElement('li');

  // // add class
  // li.className = 'collection-item';

  // //create a text node and append it to  li
  // li.appendChild(document.createTextNode(taskInput.value));

  // // create new link element 
  // const link = document.createElement('a')

  // // add class
  // link.className = 'delete-item secondary-content';

  // // add Icon html
  // link.innerHTML = '<i class="fa fa-trash fa-lg"></li>';

  // // append link to li
  // li.appendChild(link);

  // // append li to ul
   taskList.appendChild(li);

  // // clear input 
   taskInput.value = '';


  // // Prevent default behavior 
   e.preventDefault();


   console.log(taskList)


}



// Remove  task event
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {

    if (confirm("Are you Sure??")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}


//Clear all Tasks
function clearTasks(e) {

  if (confirm('Deleting all Tasks, Are you sure ')) {
    taskList.innerHTML = '';
  }

}



// Filter all tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }

  });


}































// // Define UI Vars
// const form = document.querySelector('#task-form'); // This is the form
// const taskList = document.querySelector('.collection'); // this is the UL
// const clearBtn = document.querySelector('.clear-tasks'); // this is the clear tasks button
// const filter = document.querySelector('#filter'); // this is the Input to Filter task
// const taskInput = document.querySelector('#task'); // This is the input for New Task

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // Add task event
//   form.addEventListener('submit', addTask);

//   // Remove  task event
//   taskList.addEventListener('click', removeTask);

//   // Clear Task Events 
//   clearBtn.addEventListener('click', clearTasks);

//   // filter tasks
//   filter.addEventListener('keyup', filterTasks);
// }

// // Add Task
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Add a task');
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('a');
//   // Add class
//   link.className = 'delete-item secondary-content';
//   // Add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// };



// // Remove Task
// function removeTask(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     if (confirm("Are you sure?")) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }
// }


// // Clear  All Tasks
// function clearTasks(e) {
//   taskList.innerHTML = '';
// }

// // Filter   Tasks
// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();

//   document.querySelectorAll('.collection-item').forEach(function(task){
//     const item = task.firstChild.textContent;

//     if( item.toLowerCase().indexOf(text) != -1){
//       task.style.display = 'block';

//     }else{
//       task.style.display = 'none';
//     }

//   });

// }