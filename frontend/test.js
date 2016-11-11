

function datenbanktest(){
	console.log('datenbanktest called');
	query('INSERT INTO article("name","category") VALUES("dasisteintest","test")');
}
//=> INSERT INTO "Table Name"("Column Name") VALUES(...)

// A mixed example for a dynamic column list:
module.exports = {
	datenbanktest: datenbanktest
}