import { createElement } from 'lwc';
import JestExample from 'c/jestExample';

describe('c-jest-example', () => {

    beforeEach(() => {
         // Arrange
         const element = createElement('c-jest-example', {
            is: JestExample
        });

        // Act
        document.body.appendChild(element);
    });

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    async function flushPromises(){
        return Promise.resolve();
    }

    it('test button click, message changed', async () => {
        const element = document.body.firstChild;

        let btn = element.shadowRoot.querySelector('lightning-button');
        btn.click();

        await flushPromises();

        expect(element.shadowRoot.querySelector('p').textContent).toBe('changed');
    });
});