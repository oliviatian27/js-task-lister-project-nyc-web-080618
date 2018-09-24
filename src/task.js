class Task {
  // your code here
  constructor(list,description,priority){
    this.list=list
    this.description=description
    this.priority=priority
  }

  render(){
    return `<li>
        Task: ${this.description}
        <button data-list-title="${this.list}" data-task-name="${this.description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`
  }
}
