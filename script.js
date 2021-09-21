var ctx = document.getElementById('myChart').getContext('2d');
let val = document.getElementById("pemasukan").innerText.split(",")
let val2 = document.getElementById("pengeluaran").innerText.split(",")
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'pemasukan',
            backgroundColor: 'transparent',
            borderColor: 'rgba(17, 103, 184, 0.952)',
            data: val
        }, {
            label: 'pengeluaran',
            backgroundColor: 'transparent',
            borderColor: 'rgba(225, 240, 14, 0.952)',
            data: val2
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false
    }
});