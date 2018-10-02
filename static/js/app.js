var submit = d3.select("#filter-btn");

submit.on('click', function() {

    d3.event.preventDefault();

    var inputelement = d3.select("#datetime")

    var inputvalue = inputelement.property("value")

    console.log(inputvalue)

    var filteredData = data.filter(row => row.datetime === inputvalue);

    console.log(filteredData)

    var tbody = d3.select("tbody");

    tbody.html('');

    filteredData.forEach(function(UFO) {
        console.log(UFO);
        var row = tbody.append("tr");
    
        Object.entries(UFO).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});