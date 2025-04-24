import { makeAutoObservable } from "mobx";

class ProjectSelected {

  item = null;

  constructor() {
    makeAutoObservable(this);
  }

  addItem(id) {
    console.log('item',id)
    this.item = id;
    
  }

  deleteItem(){
    this.item = null
  }

}

const projectSelected = new ProjectSelected();
export default projectSelected;