document.getElementById("switchTheme").addEventListener("click", switchTheme);

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
  document.body.style.transition = "0.5s";
}

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(ev) {
  if (ev.type === "touchstart") ev.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* var dados = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],

  datasets: [
    {
      label: "Área Desmatada",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
      hoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800],
    },
  ],
};

var opcoes = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

var graphics = new CharacterData(document.getElementById("graphic"), {
  type: "line",
  data: dados,
  options: opcoes,
});
 */
