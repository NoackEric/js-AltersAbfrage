
function adult(age){
    var alter = document.getElementById("age").value;
    if(alter >= 18){
        console.log(true);
        document.getElementById("bestätigt").innerHTML = "Volljährig";
    }else{
        console.log(false);
        document.getElementById("bestätigt").innerHTML = "Minderjährig";
        document.getElementById("bestätigt").style.color = "red";
    }
}

