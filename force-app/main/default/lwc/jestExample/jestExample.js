import { LightningElement } from 'lwc';

export default class JestExample extends LightningElement {
    message = 'hello world';

    change(){
        this.message = 'changed';
    }
}