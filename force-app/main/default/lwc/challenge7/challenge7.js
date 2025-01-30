import { api, LightningElement } from 'lwc';
import OBJECT_API_NAME from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class Challenge7 extends LightningElement {

    @api
    recordId;

    objectApiName = OBJECT_API_NAME;
    nameField = NAME_FIELD;
}