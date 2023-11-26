import LightningDatatable from "lightning/datatable";
import actionButtonsTemplate from "./actionButtonsType.html";
// import customNumberTemplate from "./customNumber.html";

export default class MyCustomTypeDatatable extends LightningDatatable {
  static customTypes = {
    actionButtons : {
      template: actionButtonsTemplate,
      standardCellLayout: false,
      typeAttributes: ["actionButtonData", "actionhandler"],
    },
    // customNumber: {
    //   template: customNumberTemplate,
    //   standardCellLayout: false,
    //   typeAttributes: ["status"],
    // },
    // Other types here
  };

  // handleAction(event) {
  //   console.log('event');
  //   alert(event.detail);
  // }
}