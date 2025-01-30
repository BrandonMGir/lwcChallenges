import { LightningElement, track } from 'lwc';

export default class Challenge1 extends LightningElement {

    @track 
    list = [];

    id = 0;

    handleInput(){
        let input = this.refs.input;
        this.list.push({val : input.value, id : this.id});
        input.value = '';
        id++;
    }
}