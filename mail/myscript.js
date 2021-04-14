var emailList =  ["haha@gmail.com","ahah@gmail.com","fun@gmail.com","veryfun@gmail.com"];
console.log("Lista delle email: " + emailList)
var emailUser = prompt("Insert your email");
console.log("Nuova email inserita: " + emailUser)
var emailYes = false;


for (var i = 0; i < emailList.length; i++){
    var emailEx = emailList[i]

    if(emailUser ===  emailEx){
        console.log("L'email inserita è in lista");
        document.getElementById("emailAlert").innerHTML = emailUser + ", sei in lista!";
        var emailYes = true;
    }
}

if (!emailYes){
    console.log("L'email inserita non è in lista");
    document.getElementById("emailAlert").innerHTML = emailUser + ", non sei in lista!";
}

