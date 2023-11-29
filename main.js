// PROGRAM

document.getElementById("btn").addEventListener("click", enter);

function enter() {
  let count = 0;

  let response1 = document.getElementById("search-in").value;
  if (response1 == "5") {
    document.getElementById("is-correct").innerText = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct").innerText = "Incorrect";
  }

  let response2 = document.getElementById("search-in1").value;
  if (response2 == "false") {
    document.getElementById("is-correct1").innerText = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct1").innerText = "Incorrect";
  }
  let response3 = document.getElementById("search-in2").value;
  if (response3 == "basketball") {
    document.getElementById("is-correct2").innerText = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct2").innerText = "Incorrect";
  }
  let response4 = document.getElementById("search-in3").value;
  if (response4 == "Los Angeles Lakers") {
    document.getElementById("is-correct3").innerText = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct3").innerText = "Incorrect";
  }
  document.getElementById("score").innerText = count;
  document.getElementById("percent").innerText = (count / 4) * 100;
}
