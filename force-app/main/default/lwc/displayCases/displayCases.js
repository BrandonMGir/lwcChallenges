import { LightningElement, wire } from 'lwc';
import getCases from '@salesforce/apex/demo.getCases';
import {refreshApex} from '@salesforce/apex';

export default class DisplayCases extends LightningElement {

    @wire(getCases)
    caseList;

    columns = [
        {label:'Subject', fieldName:'Subject', type:'text'},
        {label:'Account', fieldName:'AccountId', type:'text'},
        {label:'Contact', fieldName:'ContactId', type:'text'},
    ];

    handleNewCase(){
        refreshApex(this.caseList);
    }
}