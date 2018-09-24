document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const listForm=document.getElementById('create-list-form')
  const app = new TaskLister();
  const taskForm=document.getElementById('create-task-form')
  const lists=document.getElementById('lists')

  listForm.addEventListener('submit',e=> {
    e.preventDefault()
    const listName=document.getElementById('new-list-title').value
    app.addList(listName)
    app.render()
    e.target.reset()
  })//create new list

  taskForm.addEventListener('submit',e=>{
    const parentList=document.getElementById('parent-list')
    const taskDescription=document.getElementById('new-task-description')
    const taskPriority=document.getElementById('new-task-priority')
    e.preventDefault()
    app.addTask(parentList.value,taskDescription.value,taskPriority.value)
    app.render()//add new task to selected list
  })

  lists.addEventListener('click',e=>{
    if (e.target.className=='delete-list') {
      app.deleteList(e.target.dataset.title)
      app.render()//delete single list
    }
    if (e.target.className=='delete-task') {
      app.deleteTask(e.target.dataset.listTitle,e.target.dataset.taskName)
      app.render()//delete single task
    }
  })

});
