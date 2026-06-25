function convertTemp() {
  const temp = parseFloat(document.getElementById("temp").value);
  const isC = document.getElementById("conversion").value === "CtoF";
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "Please enter a valid number";
    return;
  }

  const converted = isC ? (temp * 9/5 + 32) : (temp - 32) * 5/9;
  result.innerHTML = `${temp} °${isC ? "C" : "F"} = ${converted.toFixed(2)} °${isC ? "F" : "C"}`;
}