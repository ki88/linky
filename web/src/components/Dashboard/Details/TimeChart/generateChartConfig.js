import moment from 'moment';

export function generateChartConfig() {
  const color = '#4DCDFC';

  return {
    data: {
      datasets: [
        {
          backgroundColor: color,
          borderColor: color,
          data: [],
          type: 'bar',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      animation: {
        // duration: 0
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            distribution: 'series',
            offset: true,
            ticks: {
              major: {
                enabled: true,
                fontStyle: 'bold'
              },
              source: 'data',
              autoSkip: true,
              autoSkipPadding: 75,
              maxRotation: 0,
              sampleSize: 100
            },
            afterBuildTicks: function(scale, ticks) {
              if (!ticks) {
                return;
              }
              var majorUnit = scale._majorUnit;
              var firstTick = ticks[0];
              var i, ilen, val, tick, currMajor, lastMajor;

              val = moment(ticks[0].value);
              if (
                (majorUnit === 'hour' && val.minute() === 0) ||
                (majorUnit === 'day' && val.hour() === 9) ||
                (majorUnit === 'month' &&
                  val.date() <= 3 &&
                  val.isoWeekday() === 1) ||
                (majorUnit === 'year' && val.month() === 0)
              ) {
                firstTick.major = true;
              } else {
                firstTick.major = false;
              }
              lastMajor = val.get(majorUnit);

              for (i = 1, ilen = ticks.length; i < ilen; i++) {
                tick = ticks[i];
                val = moment(tick.value);
                currMajor = val.get(majorUnit);
                tick.major = currMajor !== lastMajor;
                lastMajor = currMajor;
              }
              return ticks;
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: ''
            },
            ticks: {
              min: 0,
              stepSize: 1
            }
          }
        ]
      },
      tooltips: {
        intersect: false,
        mode: 'index',
        callbacks: {
          label: function(tooltipItem, myData) {
            var label = myData.datasets[tooltipItem.datasetIndex].label || '';
            if (label) {
              label += ': ';
            }
            label += parseFloat(tooltipItem.value) + ' Total clicks';
            return label;
          }
        }
      }
    }
  };
}
