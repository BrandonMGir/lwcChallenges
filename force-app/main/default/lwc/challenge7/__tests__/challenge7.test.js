import { createElement } from 'lwc';
import Challenge7 from 'c/challenge7';

describe('c-challenge7', () => {

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders lightning-record-form with given input values', () => {

        const RECORD_FIELD_INPUT = 'Name';
        const RECORD_ID_INPUT = '0031700000pJRRSAA4';
        const OBJECT_API_NAME_INPUT = 'Contact';

        const element = createElement('c-challenge7', {
            is: Challenge7
        });

        element.recordId = RECORD_ID_INPUT;
        element.objectApiName = OBJECT_API_NAME_INPUT;

        document.body.appendChild(element);

        const formEl = element.shadowRoot.querySelector(
            'lightning-record-view-form'
        );

        const fieldEl = element.shadowRoot.querySelector('lightning-output-field');

        expect(fieldEl.fieldName.fieldApiName).toEqual(RECORD_FIELD_INPUT);
        expect(formEl.recordId).toBe(RECORD_ID_INPUT);
        expect(formEl.objectApiName.objectApiName).toBe(OBJECT_API_NAME_INPUT);
    });
});