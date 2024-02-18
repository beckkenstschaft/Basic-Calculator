function show_result(z) {
  // YEH ID ATTRIBUTE SET KREGA <p> element KI
  // SELECT KREGA CLASS NAME "result-paragraph" SEY
  // [0] UTHAYEGA PEHLA ELEMENT JISKI YEH CLASS HAI

  var resultParagraph = document.getElementsByClassName("result-paragraph")[0];
  resultParagraph.setAttribute("id", "result-para");

  // YEH P KEY INNER HTML MEIN RESULT DIKHAYEGA
  document.getElementById("result-para").innerHTML = "Result = " + z;
}

function demo_sum() {
  x = parseInt(document.getElementById("demo-input1").value);
  y = parseInt(document.getElementById("demo-input2").value);
  var z = x + y;
  show_result(z);
}

function demo_subtract() {
  x = parseInt(document.getElementById("demo-input1").value);
  y = parseInt(document.getElementById("demo-input2").value);
  var z = x - y;
  show_result(z);
}

function demo_multiply() {
  x = parseInt(document.getElementById("demo-input1").value);
  y = parseInt(document.getElementById("demo-input2").value);
  var z = x * y;
  show_result(z);
}

function demo_divide() {
  x = parseInt(document.getElementById("demo-input1").value);
  y = parseInt(document.getElementById("demo-input2").value);
  var z = x / y;
  show_result(z);
}

// SCROLL REVEAL
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srLeft.reveal(".practice-header", { delay: 200 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srRight.reveal(".practice-form", { delay: 200 });
