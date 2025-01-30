import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/demo.getAccountInfo';
import {refreshApex} from '@salesforce/apex';
import OBJECT_API_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';


export default class AccountList extends LightningElement {

    @wire(getAccounts)
    list;

    objectApiName = OBJECT_API_NAME;
    fields = [NAME_FIELD, ANNUAL_REVENUE_FIELD];

    refresh(){
        refreshApex(this.list);
    }

}