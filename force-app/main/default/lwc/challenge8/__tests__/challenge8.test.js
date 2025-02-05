import { createElement } from 'lwc';
import Challenge8 from 'c/challenge8';
import { getRecord } from 'lightning/uiRecordApi';

const mockGetRecord = require('./data/_wireGetRecordResponse.json');

describe('c-challenge8', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    async function flushPromises() {
        return Promise.resolve();
    }

        it('renders the record value in the pre tag', async () => {
            // Create component
            const element = createElement('c-challenge8', {
                is: Challenge8
            });

            document.body.appendChild(element);

            // Emit data from @wire
            getRecord.emit(mockGetRecord);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Select element for validation
            const preEl = element.shadowRoot.querySelectorAll('p');
            
            expect(mockGetRecord.fields.FirstName.value).toEqual(
                preEl[0].textContent
            );

            expect(mockGetRecord.fields.LastName.value).toEqual(
                preEl[1].textContent
            );
        });

});