var targetIdol = getRandomIdol();
var attempts = 3;

function checkGuess() {
  var guess = document.getElementById("guess").value;

  switch (guess) {
    case "Diyaa":
    case "Nidawafa":
    case "Citra":
      if (guess === targetIdol) {
        document.getElementById("message").textContent = "Selamat! Anda benar.";
      } else {
        document.getElementById("message").textContent = `Tebakan Anda salah.`;

        if (attempts > 1) {
          document.getElementById(
            "message"
          ).textContent += ` Anda memiliki ${attempts} percobaan lagi.`;
        } else {
          document.getElementById(
            "message"
          ).textContent += ` Ini percobaan terakhir Anda.`;
        }
      }
      break;
    default:
      document.getElementById("message").textContent =
        "Pilih salah satu dari Diyaa, Nidawafa, atau Citra sebagai idola TikTok.";
      break;
  }
  attempts--;

  if (attempts <= 0) {
    document.getElementById(
      "message"
    ).textContent = `Anda kalah.`;
    document.getElementById("guess").setAttribute("disabled", "true");
    document.querySelector("button").setAttribute("disabled", "true");
  }
}

function getRandomIdol() {
  var idols = ["Diyaa", "Nidawafa", "Citra"];
  var randomIndex = Math.floor(Math.random() * idols.length);
  return idols[randomIndex];
}

var i = 1;
do {
  console.log(`Percobaan ke-${i} (Sukses)`);
  i++;
} while (i <= 3);

for (var j = 1; j <= 3; j++) {
  console.log(`Percobaan ke-${j} (FOR})`);
}
