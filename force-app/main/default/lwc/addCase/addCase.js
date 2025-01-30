import { LightningElement } from 'lwc';
import addCase from '@salesforce/apex/demo.addCase';

export default class AddCase extends LightningElement {


    async createCase(){
        await addCase({status: this.refs.status.value, origin: this.refs.origin.value});

        this.dispatchEvent(new CustomEvent('caseCreate'));
    }
}