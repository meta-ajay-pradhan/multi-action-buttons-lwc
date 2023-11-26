import { LightningElement } from 'lwc';
import generateData from './generateData';

const COLS = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
    {
        label: "Employees",
        type: "actionButtons",
        fieldName: "Phone",
        typeAttributes: {
          actionButtonData: { fieldName: "name" },
        },
        // cellAttributes: {
        //   class: "slds-theme_alert-texture",
        // },
    }
];
export default class Table extends LightningElement {
    columns;
    data = [];
    yaha = 'sdfdsf'
    flag = false;
    actionhandler() {
        const me = this;
        console.log('hander jaa raha hain');
        console.log(this.yaha);
        this.flag = !me.flag;
    }
    connectedCallback() {
        const data = generateData({ amountOfRecords: 100 });
        console.log(data);
        this.columns = COLS;
        this.columns[5].typeAttributes['actionhandler'] = this.actionhandler.bind(this);
        this.data = data;
        setTimeout(()=>{
            this.yaha = 'bfgbgfb';
        }, 2000)
    }
}