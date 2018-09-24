class TaskLister {
  // your solution here

  constructor(){
    this.taskList=[]
  }

  addList(listName){
    this.taskList.push(new List(listName))
  }

  deleteList(listName){
    this.taskList=this.taskList.filter(list=>list.name!=listName)
    console.log(this.taskList);
  }

  addTask(listName,description,priority){
    let list=this.taskList.find(list=>list.name==listName)
    list.lists.push(new Task(listName,description,priority))
  }

  deleteTask(listName,taskName){
    let list=this.taskList.find(list=>list.name==listName)
    list.lists=list.lists.filter(task=>task.description!=taskName)
  }
  
  render() {
    const lists=document.getElementById('lists')
    const parentList=document.getElementById('parent-list')
    parentList.innerHTML=''
    if (this.taskList.length>0) {
      parentList.parentElement.style="display:block"
      for (var i = 0; i < this.taskList.length; i++) {
        parentList.innerHTML+= `<option value="${this.taskList[i].name}">${this.taskList[i].name}</option>`
      }
    }
    lists.innerHTML=this.taskList.map(list=>list.render()).join("")
  }
}
