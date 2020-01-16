

var ctx = document.getElementById('bubbleChart').getContext('2d');
var myBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data:{
        datasets:[ 
            {
                label: "fight",
                data: [{x:1.5, y:1.5, r:80.08 }],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'

            },
            {
                label: "USA",
                data: [{x:2, y:2, r:24.12}],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)'

            },
            {
                label: "MALI",
                data: [{x:1, y:2.5, r:60.16}],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)'

            },
            {
                label: "DEATH",
                data: [{x:1.75, y:3, r:19.06}],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)'

            },
            {
                label: "UNITED NATIONS",
                data: [{x:1.1, y:1.1, r:13.98}],
                backgroundColor: 'rgba(70, 192, 192, 0.2)',
                borderColor: 'rgba(70, 192, 192, 1)'

            },
            {
                label: "OUTBREAK",
                data: [{x:0.8, y:0.8, r:50}],
                backgroundColor: 'rgba(70, 190, 192, 0.2)',
                borderColor: 'rgba(70, 190, 192, 1)'

            },
            {
                label: "STIGMA",
                data: [{x:1, y:1.1, r:25}],
                backgroundColor: 'rgba(70, 129, 192, 0.2)',
                borderColor: 'rgba(70, 129, 192, 1)'

            },
        ]

    } ,
    options: {
        legend:{
            display: true
        },
        plugins: { // Look at this bit
            datalabels: {
                anchor: function(context) {
                    var value = context.dataset.data[context.dataIndex];
                    return value.x < 50 ? 'end' : 'center';
                },
                align: function(context) {
                    var value = context.dataset.data[context.dataIndex];
                    return value.x < 50 ? 'end' : 'center';
                },
                color: function(context) {
                    var value = context.dataset.data[context.dataIndex];
                    return value.x < 50 ? context.dataset.backgroundColor : 'white';
                },
                font: {
                    weight: 'bold'
                },
                formatter: function(value) {
                    return Math.round(value.x);
                },
                offset: 2,
                padding: 0
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 150,
                top: 50,
                bottom: 50
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    beginAtZero: true,
                    max: 3,
                    stepValue: 0.5
                }
            }],
            xAxes: [{
                gridLines: {
                    display:false
                },
                ticks:{
                    beginAtZero: true, 
                    max: 3,
                    stepValue: 0.5
                }
            }],
           
        }

    }
});