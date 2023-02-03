const outputScreen = document.getElementById("output");

function display(num) {
  output.value += num;
}

function Calculate() {
  try {
    outputScreen.value = eval(output.value);
  } catch (err) {
    alert("Invalid");
  }
}

function ac() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
