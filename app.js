function calc() {
  let a = parseInt(document.querySelector("#value1").value);
  let b = parseInt(document.querySelector("#value2").value);
  let our_operator = document.querySelector("#operator").value;
  let calculate;

  if (our_operator == "add") {
    calculate = a + b;
  } else if (our_operator == "subt") {
    calculate = a - b;
  } else if (our_operator == "divi") {
    calculate = a / b;
  } else if (our_operator == "mult") {
    calculate = a * b;
  }
  //   output
  document.querySelector("#result").innerHTML = calculate;
}
