<script>
    $(function () {
      var $populationChart = $("#population-chart");
      $.ajax({
        url: $populationChart.data("url"),
        success: function (data) {
 
          var ctx = $populationChart[0].getContext("2d");
 
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: 'Population',
                backgroundColor: '#6fae3f',
                data: data.data
              }]          
            },
            options: {
              responsive: true,
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Population Bar Chart'
              }
            }
          });
 
        }
      });
 
    });
 
  </script>