var fs = require('fs');
var XLSX = require('xlsx');

var wb = XLSX.readFile('input_complex_data.xlsx');
var data = XLSX.utils.sheet_to_json(wb.Sheets.Foglio1);
var totale = new Number(0);
for(var record in data){
  console.log(data[record]['Cognome_Nome_Destinatario']);
  var importo = data[record]['Importo_MAV'].replace(',','.');
  console.log(importo);
  totale += parseFloat(importo);
}
console.log(totale.toFixed(3));