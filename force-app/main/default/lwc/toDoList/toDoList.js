import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {

    @track 
    list = [];

    id = 0;

    handleButtonAdd(){
        let input = this.refs.todoInput;
        this.list.push({val : input.value, id : this.id});
        input.value = '';
        id++;
    }

    remove(e){
        //e.target.dataset.mydataattribute
    }
}