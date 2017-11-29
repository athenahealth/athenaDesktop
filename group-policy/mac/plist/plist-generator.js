var fs = require('fs');
var plist = require('plist');
var plistBody = require('./plist.json')

const FILENAME = './build/com.athenahealth.athenadesktop.plist';

fs.writeFile(FILENAME, plist.build(plistBody), err => {
  if (err) {
  	console.log(err);
  } else {
  	console.log(`Wrote file ${FILENAME}`);
  }
});