document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (age > 0 && height > 0 && weight > 0 && gender) {
    const bmi = weight / ((height / 100) ** 2);
    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "#b71c1c";
    } else if (bmi < 25) {
      category = "Normal";
      color = "#4caf50";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "#ffeb3b";
    } else {
      category = "Obese";
      color = "#f44336";
    }

    // Update results
    document.getElementById("bmiPointer").style.display = "block";
    document.getElementById("bmiValueText").innerHTML = `BMI = ${bmi.toFixed(1)} kg/m² <span style="color:${color}">(${category})</span>`;
    document.getElementById("bmiLabel").textContent = `BMI = ${bmi.toFixed(1)}`;

    // Rotate pointer
    const minBMI = 16;
    const maxBMI = 40;
    const clampedBMI = Math.min(Math.max(bmi, minBMI), maxBMI);
    const angle = ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 180;

    const radians = (angle * Math.PI) / 180;
    const radius = 90;
    const centerX = 150;
    const centerY = 150;

    const x = centerX + radius * Math.cos(Math.PI - radians);
    const y = centerY - radius * Math.sin(Math.PI - radians);

    const pointer = document.getElementById("bmiPointer");
    pointer.setAttribute("x2", x);
    pointer.setAttribute("y2", y);
  }
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("bmiForm").reset();
  document.getElementById("bmiPointer").style.display = "none";
  document.getElementById("bmiValueText").innerHTML = "BMI = ?";
  document.getElementById("bmiLabel").textContent = "BMI = ?";
});
