import { LightningElement, api } from 'lwc';

export default class ActionButtonsColumn extends LightningElement {
    @api celldata;
    @api actionhandler;
    renderedCallback(){
        const customActionButtonStyle = document.createElement('style');
        customActionButtonStyle.innerText = `.custom-action-buttons button {
            height: 20px;
            width: 20px;
            color: rgb(0, 112, 210);
        }
        .custom-action-buttons button:hover, .custom-action-buttons button:focus {
            color: rgba(60, 61,62, 1);
        }
        .custom-action-buttons svg {
            height: 19px;
            width: 19px;
        }`;
        this.template.querySelector('.custom-action-buttons').appendChild(customActionButtonStyle);
    }

    handleSettings(){
        this.emitActionEvent('Settings');
    }
    handleAddUser(){
        this.emitActionEvent('Add User');
    }
    handleDelete(){
        this.emitActionEvent('Delete');
    }

    emitActionEvent(actionName){
        this.actionhandler();
        // alert(actionName + ' ' + this.celldata);
        // const actionEvent = new CustomEvent('multibuttonaction', {
        //     detail: actionName + ' ' + this.celldata,
        // });
        // console.log('event yaya');
        // this.dispatchEvent(actionEvent);
    }
}