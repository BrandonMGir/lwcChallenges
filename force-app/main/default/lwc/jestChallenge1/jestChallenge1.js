import { LightningElement } from 'lwc';

export default class JestChallenge1 extends LightningElement {
    message = 'hello';

    click(){
        let input = this.refs.input;
        this.message = input.value;
    }
}