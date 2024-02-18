function show_result(z){
    // YEH ID ATTRIBUTE SET KREGA <p> element KI
    // SELECT KREGA CLASS NAME "result-paragraph" SEY 
    // [0] UTHAYEGA PEHLA ELEMENT JISKI YEH CLASS HAI

    var resultParagraph = document.getElementsByClassName("result-paragraph")[0]; 
    resultParagraph.setAttribute("id", "result-para");

    // YEH P KEY INNER HTML MEIN RESULT DIKHAYEGA
    document.getElementById("result-para").innerHTML = "Result = " + z;
}

function demo_sum() {
    var x = 0;
    var y = 0;
    x = parseInt(document.getElementById("demo-input1").value);
    y = parseInt(document.getElementById("demo-input2").value);
    var z = x + y;
    show_result(z);
}

function demo_subtract(){
    var x = 0;
    var y = 0;
    x = parseInt(document.getElementById("demo-input1").value);
    y = parseInt(document.getElementById("demo-input2").value);
    var z = x - y;
    show_result(z);
}

function demo_multiply(){
    var x = 0;
    var y = 0;
    x = parseInt(document.getElementById("demo-input1").value);
    y = parseInt(document.getElementById("demo-input2").value);
    var z = x * y;
    show_result(z);
}

function demo_divide(){
    var x = 0;
    var y = 0;
    x = parseInt(document.getElementById("demo-input1").value);
    y = parseInt(document.getElementById("demo-input2").value);
    var z = x / y;
    show_result(z);
}