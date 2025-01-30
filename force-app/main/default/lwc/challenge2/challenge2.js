import { LightningElement } from 'lwc';

export default class Challenge2 extends LightningElement {
    isVisible = true;
    header = '';

    toggleVisible(){
        this.isVisible = !this.isVisible;
    }

    handleInput(){
        let input = this.refs.input;
        this.header = input.value;
    }
}