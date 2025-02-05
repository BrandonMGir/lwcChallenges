import { createElement } from 'lwc';
import JestChallenge1 from 'c/jestChallenge1';

describe('c-jest-challenge1', () => {

    beforeEach(() => {
        // Arrange
        const element = createElement('c-jest-challenge1', {
            is: JestChallenge1
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

    it('TODO: test case generated by CLI command, please fill in test logic', async () => {
        const element = document.body.firstChild;

        let display = element.shadowRoot.querySelector('p');
        let input = element.shadowRoot.querySelector('lightning-input');
        let btn = element.shadowRoot.querySelector('lightning-button');

        const testInput = 'test';

        expect(display.textContent).toBe('hello');

        input.value = testInput;

        btn.click();

        await flushPromises();

        expect(display.textContent).toBe(input.value);
    });
});