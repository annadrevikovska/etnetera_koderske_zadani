/* Responsive charts created with Google Charts library. */

/* Author: © - Anna Drevikovska */

google.charts.load("current", {packages:['corechart'], 'language': 'cs'});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ["Hour", "Počet zákazníků", { role: "style" } ],
        ["8:00", 4, "#ffc59b"],
        ["", 6, "#f88c6c"],
        ["9:00", 6, "#f88c6c"],
        ["", 5, "#f88c6c"],
        ["10:00", 2, "#ffc59b"],
        ["", 3, "#ffc59b"],
        ["11:00", 5, "#f88c6c"],
        ["", 9, "#e64e21"],
        ["12:00", 8, "#e64e21"],
        ["", 7, "#e64e21"],
        ["13:00", 5, "#f88c6c"],
        ["", 4.75, "#f88c6c"],
        ["14:00", 4.5, "#f88c6c"],
        ["", 3, "#ffc59b"],
        ["15:00", 3.25, "#ffc59b"],
        ["", 5, "#f88c6c"],
        ["16:00", 4.5, "#ffc59b"],
        ["", 7.5, "#e64e21"],
        ["17:00", 6.5, "#e64e21"],
        ["", 7, "#e64e21"],
        ["18:00", 7, "#e64e21"],
        ["", 5, "#f88c6c"],
        ["19:00", 5, "#f88c6c"],
        ["", 4.5, "#ffc59b"],
        ["20:00", 6.75, "#e64e21"],
        ["", 5, "#f88c6c"],
        ["21:00", 4.5, "#ffc59b"],
        ["", 4, "#ffc59b"],
        ["22:00", 3.5, "#ffc59b"]
    ]);

	var view = new google.visualization.DataView(data);

	var options = {
	    title: "Pondělí",
	    height: 400,
	    bar: {groupWidth: "95%"},
	    legend: { position: "none" },
	    backgroundColor: "#f2f2f2",
	    enableInteractivity: false,
	    vAxis: {
	        gridlines : {color: 'transparent'},
	        baselineColor: '#f2f2f2',
	        textPosition: 'none'
	    },
	    hAxis: { 
	        slantedText: true, 
	        slantedTextAngle: 90
	    },
	    titleTextStyle: {
	        color: '#000',
	        fontName: 'Open Sans',
	        fontSize: 24,
	        bold: false,
	        italic: false
	    }
	};

	var container = document.getElementById("chartA");
	var chart = new google.visualization.ColumnChart(container);

	google.visualization.events.addListener(chart, 'ready', changeBorderRadius);
	google.visualization.events.addListener(chart, 'ready', changeColumnPosition);

	function changeBorderRadius() {
	    chartColumns = container.getElementsByTagName('rect');

	    for (count = 4; count < 33; count++) {
	        chartColumns[count].setAttribute('rx', 15);
	    }
	}

	function changeColumnPosition() {
	    chartColumns = container.getElementsByTagName('rect');

	    for (count = 4; count < 33; count++) {
	        var y = chartColumns[count].getAttribute('y');
	        y = parseInt(y);
	        y = y + 20;
	        console.log("y = " + y);
	        chartColumns[count].setAttribute('y', y);
	    }
	}

	chart.draw(view, options);
}

google.charts.load("current", {packages:['corechart'], 'language': 'cs'});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ["Hour", "Počet zákazníků", { role: "style" } ],
        ["8:00", 2, "#ffc59b"],
        ["", 4, "#f88c6c"],
        ["9:00", 4.25, "#f88c6c"],
        ["", 3.75, "#f88c6c"],
        ["10:00", 0.5, "#ffc59b"],
        ["", 1.75, "#ffc59b"],
        ["11:00", 3.75, "#f88c6c"],
        ["", 7, "#e64e21"],
        ["12:00", 6, "#e64e21"],
        ["", 5, "#e64e21"],
        ["13:00", 4, "#f88c6c"],
        ["", 3.75, "#f88c6c"],
        ["14:00", 3.25, "#f88c6c"],
        ["", 1.5, "#ffc59b"],
        ["15:00", 2.25, "#ffc59b"],
        ["", 4, "#f88c6c"],
        ["16:00", 3.25, "#ffc59b"],
        ["", 5.75, "#e64e21"],
        ["17:00", 4.75, "#e64e21"],
        ["", 5, "#e64e21"],
        ["18:00", 5.25, "#e64e21"],
        ["", 4, "#f88c6c"],
        ["19:00", 3.75, "#f88c6c"],
        ["", 3.25, "#ffc59b"],
        ["20:00", 5, "#e64e21"],
        ["", 4, "#f88c6c"],
        ["21:00", 3.25, "#ffc59b"],
        ["", 2.25, "#ffc59b"],
        ["22:00", 1.25, "#ffc59b"]
    ]);

    var view = new google.visualization.DataView(data);

    var options = {
        title: "Pondělí",
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        backgroundColor: "#f2f2f2",
        vAxis: {
            gridlines : {color: 'transparent'},
            baselineColor: '#f2f2f2',
            textPosition: 'none'
        },
        hAxis: { 
            slantedText: true, 
            slantedTextAngle: 90
        },
        titleTextStyle: {
            color: '#000',
            fontName: 'Open Sans',
            fontSize: 24,
            bold: false,
            italic: false
        }
    };

    var container = document.getElementById("chartB");
    var chart = new google.visualization.ColumnChart(container);

    chart.draw(view, options);
}

$(window).resize(function() {
	drawChart1();
	drawChart2();
});