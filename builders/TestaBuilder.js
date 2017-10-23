var Field = require('../record_model/Field.js');
var Record = require('../record_model/Record.js');

function TestaBuilder(sia, abi){
	this.sia = sia;
	this.fieldEmpty =  new Field(1, " ");
	this.fieldTipoRecord = new Field(2, "IM");
	this.fieldSia = new Field("5", sia);
	this.fieldAbi = new Field("5", abi);
	this.testa = new Record();
	this.testa.addField(this.fieldEmpty);
	this.testa.addField(this.fieldTipoRecord);
	this.testa.addField(this.fieldSia);
	this.testa.addField(this.fieldAbi);
	
	console.log(this.testa.toCBI())
};
module.exports = TestaBuilder;
