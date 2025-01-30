import { LightningElement, track } from 'lwc';

export default class Challenge3 extends LightningElement {

    @track
    changeable = 'red';

    changeToRed(){
        this.changeable = 'red';
    }

    changeToGreen(){
        this.changeable = 'green';
    }

    changeToBlue(){
        this.changeable = 'blue';
    }
}