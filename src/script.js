// Scholarship Eligibility
document.getElementById("scholarshipForm").onsubmit = function (e) {
  e.preventDefault();
  const age = parseInt(document.getElementById("age").value, 10);
  const city = document.getElementById("city").value.trim().toLowerCase();
  const largeFamily = document.getElementById("largeFamily").checked;
  const genius = document.getElementById("genius").checked;

  let isEligible = false;

  if (
    (age >= 18 && city === "barcelona") ||
    (age > 30 && largeFamily) ||
    (age >= 12 && age < 18 && genius)
  ) {
    isEligible = true;
  }

  document.getElementById("scholarshipResult").textContent = isEligible
    ? "¡Enhorabuena! Cumples los requisitos para la beca."
    : "Lo siento, no cumples los requisitos para la beca.";
};

// Car Won't Start Logic
document.getElementById("carForm").onsubmit = function (e) {
  e.preventDefault();
  const liveNear = document.getElementById("liveNear").checked;
  const wantToWalk = document.getElementById("wantToWalk").checked;
  const hasGasoline = document.getElementById("hasGasoline").checked;
  const hasMoney = document.getElementById("hasMoney").checked;
  const hasBattery = document.getElementById("hasBattery").checked;

  let result = "";

  if (liveNear && wantToWalk) {
    result = "Te vas andando y ya lo arreglarás mañana.";
  } else {
    if (!hasGasoline) {
      result = "Hay que poner gasolina. ";
      if (hasMoney) {
        result += "Pon gasolina.";
      } else {
        result += "Vas en metro.";
      }
    } else {
      if (!hasBattery) {
        result = "Recargar batería.";
      } else {
        result = "Pásate por el mecánico.";
      }
    }
  }
  document.getElementById("carResult").textContent = result;
};