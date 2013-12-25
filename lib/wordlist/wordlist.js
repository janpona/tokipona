

/**
 * Returns an array of 128 unique, 2-digit hex ID numbers.
 */
function generateWordIDs() {
  var ids = [];
  var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  for (var i = 0; i < digits.length; i++) {
    for (var j = 0; j < digits.length / 2; i++) {
      ids.push(digits[i] + digits[j]);
    }
  }
  
  return ids;
}

/**
 *
 */
function generateWordRows() {
  var rows = [];
  var words = ['a'];
  var wordIDs = generateWordIDs();
  for (var i = 0; i < words.length; i++) {
    var row = [wordIDs[i], words[i]];
    rows.push(row);
  }
  
  return rows;
}

/**
 * Creates a data URI with CSV file contents of the word list.
 * 
 * CSV method modelled from:
 * @see http://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
 */
function main() {
  var wordRows = generateWordRows();
  var content = 'data:text/csv;charset=utf-8,';
  
  wordRows.forEach(function(columns, index) {
    row = columns.join(',');
    if (index < words.length) {
      row += "\n";
    }
    
    content += row;
  });
  
  var encodedUri = encodeURI(content);
  window.open(encodedUri);
}

main();
