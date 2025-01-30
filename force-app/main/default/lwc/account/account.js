import { api, LightningElement } from 'lwc';
import deleteAccount from '@salesforce/apex/demo.deleteAccount';

export default class Account extends LightningElement {

    @api
    record

    async deleteAccount(e){
        await deleteAccount({id: e.target.dataset.recordid});
        this.dispatchEvent(new CustomEvent('deleteevent'));
    }
}