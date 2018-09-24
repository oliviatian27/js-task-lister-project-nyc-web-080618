class List {
  // your code here
  constructor(name){
    this.lists=[]
    this.name=name
  }

  render(){
    return `<div>  <h2>${this.name}
          <button data-title="${this.name}" class="delete-list">
            X
          </button>
        </h2>
        <ul>
          ${this.lists.map(task=>task.render()).join("")}
        </ul>
      </div>`
  }
}
