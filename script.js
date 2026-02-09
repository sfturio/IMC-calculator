function bmiCalculator(weight, height) {
  return Math.round(weight / (height ** 2));
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Abaixo do peso";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Sobrepeso";
  return "Obesidade";
}

const form = document.getElementById("bmiForm");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const bmiValueEl = document.getElementById("bmiValue");
const bmiHintEl = document.getElementById("bmiHint");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = Number(weightEl.value);
  const height = Number(heightEl.value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    bmiValueEl.textContent = "—";
    bmiHintEl.textContent = "Preencha peso e altura com valores válidos.";
    return;
  }

  const bmi = bmiCalculator(weight, height);
  bmiValueEl.textContent = bmi;
  bmiHintEl.textContent = `Categoria: ${bmiCategory(bmi)}`;
});

resetBtn.addEventListener("click", () => {
  form.reset();
  bmiValueEl.textContent = "—";
  bmiHintEl.textContent = "Preencha os campos e clique em “Calcular”.";
});