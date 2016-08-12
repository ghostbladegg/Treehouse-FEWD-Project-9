// traffic button variables
var Chart;
var trafficButton = document.querySelectorAll("#traffic-group a");
var hourlyTrafficButton = document.getElementById("traffic-hourly");
var dailyTrafficButton = document.getElementById("traffic-daily");
var weeklyTrafficButton = document.getElementById("traffic-weekly");
var monthlyTrafficButton = document.getElementById("traffic-monthly");


var trafficCanvas = document.getElementById("traffic-chart");

var primaryColor = "#7379BD";
var primaryColorDark = "#4D4D71";
var primaryColorLight = "#E2E3F5";

// chart default
Chart.defaults.global.defaultFontFamily = 'Comfortaa';
Chart.defaults.global.legend.display = false;

// make loop to find active class on traffic button
function toggleTrafficButton() {
  // loop through traffic button
  for(var i=0; i<trafficButton.length; i++) {
    // find class .active from button
    // if(trafficButton[i].classList.contains("traffic-active")) {
      // remove class .active from button
      trafficButton[i].classList.remove("traffic-active");
    // }
  } // for loop end
  // add .active class for clicked button
  this.classList.add("traffic-active");
} // toggleTrafficButton end

// event listener for traffic button
hourlyTrafficButton.addEventListener("click", toggleTrafficButton);
dailyTrafficButton.addEventListener("click", toggleTrafficButton);
weeklyTrafficButton.addEventListener("click", toggleTrafficButton);
monthlyTrafficButton.addEventListener("click", toggleTrafficButton);

// chart traffic data
var hourlyData = [29, 18, 22, 23, 26, 23, 29, 20, 32, 45, 60, 49, 65, 50, 47, 42, 49, 43, 52, 67, 72, 88, 69, 44];
var dailyData = [176, 273, 286, 243, 266, 386, 468];
var weeklyData = [250, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000];
var monthlyData = [3000, 2700, 2250, 2900, 3200, 2750, 3400, 3600, 3300, 2800, 3600, 3500];

// stepsize traffic value
var hourlyStepSize = 10;
var dailyStepSize = 50;
var weeklyStepSize = 500;
var monthlyStepSize = 1000;

// max traffic value
var hourlyMax = 100;
var dailyMax = 500;
var weeklyMax = 2500;
var monthlyMax = 5000;

var hourlyLabels = [
                  "00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00",
                  "12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"
];
var dailyLabels = [
                  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
var weeklyLabels = ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"];
var monthlyLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var trafficChartData = {

	labels: weeklyLabels,

	datasets: [
		{
			fill: true,
			lineTension: 0,
			backgroundColor: primaryColorLight,
			pointBackgroundColor: '#FFFFFF',
			borderWidth: 1,
			borderColor: primaryColor,
			pointBorderColor: primaryColor,
			pointRadius: 5,
			pointStyle: "circle",
			showLines: true,
			data: weeklyData
		}
	]
};

var trafficChartOptions = {
	scales: {

		xAxes: [{
			ticks: {
				display: true
			},
			gridLines: {
				drawTicks: false
			}
		}],

		yAxes: [{
			ticks: {
				display: true,
				stepSize: weeklyStepSize,
				max: weeklyMax,
			},
			gridLines: {
				drawTicks: false,
			}
		}]
	}
};


var trafficChart = new Chart(trafficCanvas, {
	type: "line",
	data: trafficChartData,
	options: trafficChartOptions
});


function hourlyTraffic() {
	trafficChart.data.datasets[0].data = hourlyData;
	trafficChart.data.labels = hourlyLabels;
	trafficChart.options.scales.yAxes[0].ticks.stepSize = hourlyStepSize;
	trafficChart.options.scales.yAxes[0].ticks.max = hourlyMax;
	trafficChart.update();
}

function dailyTraffic() {
	trafficChart.data.datasets[0].data = dailyData;
	trafficChart.data.labels = dailyLabels;
	trafficChart.options.scales.yAxes[0].ticks.stepSize = dailyStepSize;
	trafficChart.options.scales.yAxes[0].ticks.max = dailyMax;
	trafficChart.update();
}

function weeklyTraffic() {
	trafficChart.data.datasets[0].data = weeklyData;
	trafficChart.data.labels = weeklyLabels;
	trafficChart.options.scales.yAxes[0].ticks.stepSize = weeklyStepSize;
	trafficChart.options.scales.yAxes[0].ticks.max = weeklyMax;
	trafficChart.update();
}

function monthlyTraffic() {
	trafficChart.data.datasets[0].data = monthlyData;
	trafficChart.data.labels = monthlyLabels;
	trafficChart.options.scales.yAxes[0].ticks.stepSize = monthlyStepSize;
	trafficChart.options.scales.yAxes[0].ticks.max = monthlyMax;
	trafficChart.update();
}

// Traffic Line Chart navigation event listeners
hourlyTrafficButton.addEventListener("click", hourlyTraffic);
dailyTrafficButton.addEventListener("click", dailyTraffic);
weeklyTrafficButton.addEventListener("click", weeklyTraffic);
monthlyTrafficButton.addEventListener("click", monthlyTraffic);


// daily-traffic start

var dailyTrafficCanvas = document.getElementById("daily-traffic-chart");

var dailyTrafficChartData = {
		labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		datasets: [
			{
				backgroundColor: primaryColor,
				data: [75, 100, 175, 125, 225, 200, 100],
			}
		]
};

var dailyTrafficChartOptions = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          stepSize: 50,
        }
      }
    ]
  }
};

var dailyTrafficChart = new Chart(dailyTrafficCanvas, {
    type: 'bar',
    data: dailyTrafficChartData,
    options: dailyTrafficChartOptions
});

// mobile-users start
var mobileUsersCanvas = document.getElementById("mobile-users-chart");

var mobileUsersChartData = {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [{
    data: [750,250,500],
    backgroundColor: [primaryColor, primaryColorDark, primaryColorLight],
    borderWidth: 0
  }]
};


var mobileUsersChartOptions = {
  legend: {
    display: true,
    position: "bottom",
    labels: {
      boxWidth: 50,
      padding: 20
    }
  }
};

var mobileUsersChart = new Chart(mobileUsersCanvas, {
  type: "doughnut",
  data: mobileUsersChartData,
  options: mobileUsersChartOptions
});
