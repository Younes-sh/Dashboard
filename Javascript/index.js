
window.onload = function () {

    var chart1 = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 50,
            // innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 11, label: "Labels" },
                { y: 33.5, label: "Inbox" },
                { y: 55.5, label: "Archives" },
                // { y: 7, label: "Drafts"},
                // { y: 15, label: "Trash"},
                // { y: 6, label: "Spam"}
            ]
        }]
    });
    chart1.render();
    
}

// graph This Year Growth

window.onload = function () {

    var chart2 = new CanvasJS.Chart("graph-year", {
        animationEnabled: true,
        title:{
            text: "Crude Oil Reserves vs Production, 2016"
        },	
        axisY: {
            title: "Billions of Barrels",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Millions of Barrels/day",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "Proven Oil Reserves (bn)",
            legendText: "Proven Oil Reserves",
            showInLegend: true, 
            dataPoints:[
                { label: "Saudi", y: 266.21 },
                { label: "Venezuela", y: 302.25 },
                { label: "Iran", y: 157.20 },
                { label: "Iraq", y: 148.77 },
                { label: "Kuwait", y: 101.50 },
                { label: "UAE", y: 97.8 }
            ]
        },
        {
            type: "column",	
            name: "Oil Production (million/day)",
            legendText: "Oil Production",
            axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "Saudi", y: 10.46 },
                { label: "Venezuela", y: 2.27 },
                { label: "Iran", y: 3.99 },
                { label: "Iraq", y: 4.45 },
                { label: "Kuwait", y: 2.92 },
                { label: "UAE", y: 3.1 }
            ]
        }]
    });
    chart2.render();
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart2.render();
    }
    
    }