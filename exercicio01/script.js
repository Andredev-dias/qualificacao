function somar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("resposta");
    res.textContent = num1 + num2;
}

function sub(){
    var n1 = document.getElementById("n1").valueAsNumber;
    var n2 = document.getElementById("n2").valueAsNumber;
    var resp = document.getElementById("res");
    resp.innerHTML = n1 - n2;
}





