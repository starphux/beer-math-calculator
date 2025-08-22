function calculate() {
  const cans = parseFloat(document.getElementById("cans").value);
  const ozPerCan = parseFloat(document.getElementById("ozPerCan").value);
  const price = parseFloat(document.getElementById("price").value);
  const abv = parseFloat(document.getElementById("abv").value);

  if (isNaN(cans) || isNaN(ozPerCan) || isNaN(price) || isNaN(abv)) {
    document.getElementById("results").innerHTML = "Please enter valid numbers.";
    return;
  }

  const totalOz = cans * ozPerCan;
  const pricePerCan = price / cans;
  const pricePerOz = price / totalOz;
  const alcoholPerOz = abv / ozPerCan;

  document.getElementById("results").innerHTML = `
    <strong>Results:</strong><br>
    Total Cans: ${cans}<br>
    Total Oz: ${totalOz.toFixed(2)}<br>
    Price per Can: $${pricePerCan.toFixed(2)}<br>
    Price per Oz: $${pricePerOz.toFixed(2)}<br>
    Alcohol per Oz: ${alcoholPerOz.toFixed(3)}% ABV
  `;
}