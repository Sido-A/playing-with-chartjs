const context = document.getElementById("myChart").getContext("2d");
const config = {
  type: "line",
  data: {
    datasets: [
      {
        data: [
          { x: "2016-1-20", y: 210 },
          { x: "2016-2-20", y: 2 },
          { x: "2016-3-20", y: 50 },
          { x: "2016-4-20", y: 30 },
          { x: "2016-5-20", y: 80 },
          { x: "2016-6-20", y: 20 },
          { x: "2016-12-27", y: 10 },
          { x: "2016-12-28", y: 15 },
          { x: "2016-12-29", y: 1 },
          //   { x: "2016-12-30", y: -18 },
          //   { x: "2016-12-31", y: -12 },
        ],
      },
    ],
  },
  options: {
    spanGaps: true, // enable for all datasets

    // showLine: false, // disable for all datasets

    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: "linear",
    //     from: 1,
    //     to: 0,
    //     loop: true,
    //   },
    // },

    plugins: {
      title: {
        display: true,
        text: "Custom Chart Title",
      },
      legend: {
        display: false,
      },

      tooltip: {
        usePointStyle: true,
        callbacks: {
          labelPointStyle: function (context) {
            return {
              //   pointStyle: "rectRounded",
              rotation: 0,
            };
          },
        },
      },
    },

    elements: {
      line: {
        tension: 0.5,
        borderColor: "rgb(75, 192, 192)",
        fill: {
          target: "origin",
          above: "rgba(234,186,248,1)", // Area will be red above the origin
          //   below: "rgb(255, 255, 0)", // Area will be red below the origin
        },
      },
    },

    parsing: {
      xAxisKey: "x",
      yAxisKey: "y",
    },
    // datasets: {
    //   line: {
    //     pointRadius: 0, // disable for all `'line'` datasets
    //   },
    // },
  },
};

const myChart = new Chart(context, config);
