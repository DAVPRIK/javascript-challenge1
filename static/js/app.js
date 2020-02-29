// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");
console.log(tableData)

tableData.forEach(addRow)
function addRow (item,index){
    var row=tbody.append('tr')
    row.append('td').text(item.datetime);
    row.append('td');
    row.append('td');
    row.append('td');
    row.append('td');
    row.append('td');


}

    