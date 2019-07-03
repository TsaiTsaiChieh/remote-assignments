function ajax(src, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            var product = JSON.parse(request.responseText);
            callback(product);
        }
    }
    request.open('GET', src);
    request.send();
}

function render(data) {
    // document.createElement() and appendChild() methods are preferred.
    // add div tag
    document.body.appendChild(document.createElement('div'));
    var div = document.getElementsByTagName('div')[0];
    // add h2 tag 
    var h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.innerText = "For assigment 2 in week 4";
    // add ul tag
    var table = document.createElement('table');
    div.appendChild(table);
    // var table = document.getElementsByTagName('table')[0];
    var tr = document.createElement('tr');
    for (var key in data[0]) {

        let td = document.createElement('td');
        td.innerText = key;
        tr.appendChild(td);
    }

    table.appendChild(tr);
    var td_ = "";
    for (let i = 0; i < data.length; i++) {
        td_ += "<tr>";
        td_ += `<td>${data[i].name}</td>`;
        td_ += `<td>${data[i].price}</td>`;
        td_ += `<td>${data[i].description}</td>`;
        td_ += "</tr>";
    }


    table.innerHTML += td_;

}
// ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
//     render(response);
// });
ajax("../data/products.json", function (response) {
    render(response);
});