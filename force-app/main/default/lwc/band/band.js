import { LightningElement, api } from 'lwc';

export default class Band extends LightningElement {

    @api
    name = '';

    @api
    description = '';

    @api
    image = '';
}