import { LightningElement } from 'lwc';
import pwd_resource from '@salesforce/resourceUrl/parkwayDriveImage';
import gs_resource from '@salesforce/resourceUrl/gunshipImage';
import meg_resource from '@salesforce/resourceUrl/megadethImage';

export default class Challenge5 extends LightningElement {

    value = 0;

    bandName;
    bandDesc;
    bandImage;

    panelVisible = false;

    options = [
        { label: 'Parkway Drive', value: 0 },
        { label: 'Megadeth', value: 1 },
        { label: 'Gunship', value: 2 },
    ];

    bands = [
        {name: 'Parkway Drive', description: 'Heavy metal band', image: pwd_resource},
        {name: 'Megadeth', description: 'Heavy metal band', image: meg_resource},
        {name: 'Gunship', description: 'New Retro Wave', image: gs_resource},
    ];


    handleChange(event) {
        this.value = event.detail.value;
        this.bandName = this.bands[this.value].name;
        this.bandDesc = this.bands[this.value].description;
        this.bandImage = this.bands[this.value].image;
        this.panelVisible = false;
    }

    showPanel(){
        this.panelVisible = !this.panelVisible;
    }
}