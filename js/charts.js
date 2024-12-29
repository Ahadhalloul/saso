// ----start workshops pie chart in facility employee page ---------
const workshopsChart = document.getElementById("workshopChart");

const doughnutChart1 = new Chart(workshopsChart, {
  type: "doughnut",
  data: {
    labels: ["الورش المباشرة", "الورش المسجلة"],
    datasets: [
      {
        label: "",
        data: [17, 3],
        backgroundColor: ["#1B8354", "#F7D54D"],
        borderWidth: 8,
        borderRadius: 8,
        hoverBorderColor: "#fff",
        cutout: "65%",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});
// ----end workshops pie chart---------
// ---------------
// ----start session pie chart in consultant page---------
const sessionsChart = document.getElementById("sessionChart");

const doughnutChart2 = new Chart(sessionsChart, {
  type: "doughnut",
  data: {
    labels: ["جلسات اكتملت", "جلسات لم تكتمل"],
    datasets: [
      {
        label: "",
        data: [17, 3],
        backgroundColor: ["#1B8354", "#F7D54D"],
        borderWidth: 8,
        borderRadius: 8,
        hoverBorderColor: "#fff",
        cutout: "65%",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});
// ----end session pie chart---------
