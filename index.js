const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const bars = document.querySelectorAll(".bar");

let biggest = 0;

for (let i = 0; i < data.length; i++) {
  if (biggest < data[i].amount) {
    biggest = data[i].amount;
  }
}

bars.forEach((bar, i) => {
  const height = parseInt((data[i].amount / 1.5 / biggest) * 100);
  const bar_child = document.createElement("div");
  bar_child.classList.add("bar_child");
  bar_child.innerText = "$" + data[i].amount;
  bar.appendChild(bar_child);

  if (data[i].amount === biggest) {
    bar.style.background = "var(--Cyan)";
    bar.addEventListener("mouseover", (e) => {
      bar.target.style.background = "#91cad1";
    });
    bar.addEventListener("mouseout", (e) => {
      bar.target.style.background = "var(--Cyan)";
    });
  } else {
    bar.style.background = "var(--Soft-red)";
    bar.addEventListener("mouseover", (e) => {
      bar.target.style.background = "#f99682";
    });
    bar.addEventListener("mouseout", (e) => {
      bar.target.style.background = "var(--Soft-red)";
    });
  }
  applyHeight(bar, height);
});

function applyHeight(bar, height) {
  setTimeout(() => {
    bar.style.height = height + "%";
    bar.style.transition = `1.${height}s ease-in-out`;
  }, 200);
  setTimeout(() => {
    bar.style.transition = `0.2s ease-in-out`;
  }, 400);
}
