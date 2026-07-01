let result = document.getElementById("result");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let Dollar = document.getElementById("dollar").value;
  console.log(Dollar);
  if (Dollar === NaN || Dollar == "") Dollar = 0;
  result.innerHTML =
    `<span class="text-red-500">${parseInt(Dollar) * 55}</span>` +
    " Egyption Pound";
});
