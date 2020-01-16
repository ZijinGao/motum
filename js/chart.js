Chart.defaults.global.legend.position = 'right';
Chart.defaults.global.defaultFontFamily = 'Quicksand';

var ctx2 = document.getElementById('donutChart2020').getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["positive", "negative", "neutral"],
        datasets: [{
            label: '# of Tweets',
            data: [145, 53, 196],
            backgroundColor: [
                'rgba(124, 196, 77, 1)',
                "rgba(255, 131, 115, 1)",
                'rgb(255, 218, 131,1)'
            ],
            borderColor: [
                'rgba(124, 196, 77, 1)',
                "rgba(255, 131, 115, 1)",
                'rgb(255, 218, 131,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                gridLines:{
                    display: false
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx1 = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan 10 2020', 'Jan 11 2020', 'Jan 12 2020', 'Jan 13 2020', 'Jan 14 2020', 'Jan 15 2020'],
        datasets: [{
            label: '# of Tweets',
            data: [61, 71, 93, 95, 130, 64],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('bubbleChart').getContext('2d');
var myBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data:{
        datasets:[
            {
                label: "FIGHT",
                data: [{x:1.2, y:1.3, r:60.08 }],
                backgroundColor: 'rgba(212, 118, 87, 0.6)',
                borderColor: 'rgba(212, 118, 87, 1)'

            },
            {
                label: "USA",
                data: [{x:1.7, y:2.3, r:18.1}],
                backgroundColor: 'rgba(26, 58, 80, 0.6)',
                borderColor: 'rgba(26, 58, 80, 1)'

            },
            {
                label: "MALI",
                data: [{x:0.45, y:2.3, r:45.16}],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)'

            },
            {
                label: "DEATH",
                data: [{x:1.45, y:2.8, r:14.3}],
                backgroundColor: 'rgba(245, 166, 126, 0.6)',
                borderColor: 'rgba(245, 166, 126, 1)'

            },
            {
                label: "UNITED NATIONS",
                data: [{x:0.4, y:1.5, r:10.5}],
                backgroundColor: 'rgba(255, 227, 164, 0.6)',
                borderColor: 'rgba(255, 227, 164, 1)'

            },
            {
                label: "OUTBREAK",
                data: [{x:0.35, y:0.6, r:30.5}],
                backgroundColor: 'rgba(82, 186, 245, 0.6)',
                borderColor: 'rgba(182, 186, 245, 1)'

            },
            {
                label: "STIGMA",
                data: [{x:1.9, y:0.6, r:18.75}],
                backgroundColor: 'rgba(213, 226, 242, 0.6)',
                borderColor: 'rgba(213, 226, 242, 1)'

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
        
        scales: {
            yAxes: [{
                display: false,
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
                display: false,
                gridLines: {
                    display:false
                },
                ticks:{
                    beginAtZero: true, 
                    max: 2.5,
                    stepValue: 0.5
                }
            }],
        }
    }
});