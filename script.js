var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var barColors = 'hsl(10, 79%, 65%)';
var holdbarColors = 'hsl(186, 34%, 60%)';
var defaultRadius = 5;

new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        data: yValues,
        backgroundColor: barColors,
        hoverBackgroundColor: holdbarColors,
        borderRadius: defaultRadius,
        borderSkipped: defaultRadius,
      }],
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
          tooltip: {
            enabled: false,
          },
        },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          drawBorder: false   
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
            
        }         
      }
    }
});