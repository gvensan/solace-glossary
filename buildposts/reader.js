const fs = require('fs');
const moment = require('moment');
const CsvReadableStream = require('csv-reader');
const ExcelReader = require('read-excel-file');
const AutoDetectDecoderStream = require('autodetect-decoder-stream');
const readXlsxFile = require('read-excel-file/node')

readXlsxFile(fs.createReadStream(
									"./Solace - Terms & Acronyms.xlsx"
								)).then((rows) => {
	console.log('Line from file:', rows);
	console.log('ROWS#: ' + rows.length);

	for (var i=1; i<rows.length; i++) {
		var row = rows[i];
		var entryName = row[2].toLowerCase().trim().replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, "-");
		var fileName = '../_posts/' + row[0] + "-" + entryName + ".md";
		console.log("Name: " + row[2] + " Modified: " + entryName + " FileName: " + fileName);
		console.log(row);
		if (fs.existsSync(fileName))
			fs.unlinkSync(fileName);
		buildMD(row, entryName, fileName);
	}
});
  

function buildMD(row, entryName, fileName) {
	// Date-0	Abbreviation-1	Expansion-2	Description-3	Category-4	Tags-5	References-6	

	var mdfile = fs.createWriteStream(fileName, {flags: 'w'});

	var str = "";
	var content = "";
	content = content + ('---');
	content = content + ("\n");
	content = content + ('layout: post');
	content = content + ("\n");
	// Expansion [2]
	if (row[2] !== null && row[2].trim().length > 0) {
		content = content + ('title: "' + row[2].trim().replaceAll('"', '\'').replaceAll('\r\n', '<br/>') + '"');
		content = content + ("\n");
	}
	// Description [3]
	if (row[3] !== null && row[3].trim().length > 0) {
		content = content + ('excerpt: "' + row[3].trim().replaceAll('"', '\'').replaceAll('\r\n', '<br/>') + '"');
		content = content + ("\n");
	}
	// Acronym [1]
	if (row[1] !== null && row[1].trim().length > 0) {
		content = content + ('acronym: "' + row[1].trim().replaceAll('"', '\'').replaceAll('\r\n', '<br/>') + '"');
		content = content + ("\n");
	}
	// Category [4]
	if (row[4] !== null && row[4].trim().length > 0  && row[4].split(",").length > 0) {
		content = content + ('categories:');
		content = content + ("\n");
		for(str of row[4].split(",")){
			content = content + ('  - "' + str.trim().replaceAll('"', '\'') + '"');
			content = content + ("\n");
		}
	}
	// Tags [5]
	if (row[5] !== null && row[5].trim().length > 0 && row[5].split(",").length > 0) {
		content = content + ('tags:');
		content = content + ("\n");
		for(str of row[5].split(",")){
			content = content + ('  - "' + str.trim().replaceAll('"', '\'') + '"');
			content = content + ("\n");
		}
	}
	// Referenes [6]
	if (row[6] !== null && row[6].trim().length > 0  && row[6].split(",").length > 0) {
		content = content + ('references:');
		content = content + ("\n");
		for(str of row[6].split(",")){
			content = content + ('  - "' + str.trim().replaceAll('"', '\'') + '"');
			content = content + ("\n");
		}
	}
	// Date [0]
	content = content + ('date: ' + new Date(row[0]).toUTCString());
	content = content + ("\n");
	content = content + ('author: gvensan');
	content = content + ("\n");
	content = content + ('comments: true');
	content = content + ("\n");
	content = content + ('published: true');
	content = content + ("\n");
	content = content + ('share: true');
	content = content + ("\n");
	content = content + ('permalink: ' + entryName);
	content = content + ("\n");
	content = content + ('---');
	content = content + ("\n");
	mdfile.write(content);
	mdfile.close();
	mdfile.end();
}
	