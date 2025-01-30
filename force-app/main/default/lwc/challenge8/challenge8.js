import { api, LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import FNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LNAME_FIELD from "@salesforce/schema/Contact.LastName";

export default class Challenge8 extends LightningElement {

    @api
    recordId;


    @wire(getRecord, {
        recordId: "$recordId",
        fields: [FNAME_FIELD, LNAME_FIELD]
      })
      contact;


      get firstName() {
        return getFieldValue(this.contact.data, FNAME_FIELD);
      }

      get lastName() {
        return getFieldValue(this.contact.data, LNAME_FIELD);
      }

}