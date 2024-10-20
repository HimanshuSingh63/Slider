import { LightningElement,track,api } from 'lwc';

export default class TestLwc extends LightningElement {
    @api min = 0;
    @api max = 100;
    @api step = 1;
    @track value = 50;

    handleChange(event) {
        this.value = event.target.value;
        // Dispatch a custom event with the new value
        this.dispatchEvent(new CustomEvent('valuechange', {
            detail: this.value
        }));
    }

}
