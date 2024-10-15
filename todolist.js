// let taskInput = document.getElementById('taskInput');
// let addTaskBtn = document.getElementById('addTaskBtn');
// let taskList = document.getElementById('taskList');

// // Add task function
// addTaskBtn.addEventListener('click', function() {
//   let taskText = taskInput.value.trim();
  
//   if (taskText !== '') {
//     // Create new list item
//     let li = document.createElement('li');
//     li.textContent = taskText;
//     // Append list to task 
//     taskList.appendChild(li);
//   }
// });

// let del = document.getElementById("btn")

// del.addEventListener("click",function (){
//     taskList.innerHTML=''
//     document.getElementById("taskInput").value=''
// })


let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});
//add new item to list
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
    <p> ${input.value} </p>
    <div class="item-btn">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-xmark"></i>
    </div>
    `;
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});
//delete items from list
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});
//mark item as complete
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});